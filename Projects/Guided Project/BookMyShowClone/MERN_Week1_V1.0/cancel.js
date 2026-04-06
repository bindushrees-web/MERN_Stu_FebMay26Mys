// Handles the cancelation of existing booking if exist
const bookingEmitter = require("./events");
const {getCurrentBooking, clearCurrentBooking} = require("./booking");

function cancelBooking(movies) {
    const booking = getCurrentBooking();

    if (!booking) {
        bookingEmitter.emit("bookingFailed","No booking found to cancel.");
        return null;
    }
    const movie = movies.find((m) => m.id === booking.movieId);
    if (!movie) {
        bookingEmitter.emit("BookingFailed","Movie data not found while cancelling booking.");
        return null;
    }

    const showTime = movie.find((show) => show.time.toLowerCase() === booking.time.toLowerCase());
    if (!showTime) {
        bookingEmitter.emit("BookingFailed","ShowTime data not found.");
        return null;
    }

    // restore seats
    showTime.seatsAvailable += booking.seatCount;
    
    // clear current booking
    clearCurrentBooking();

    bookingEmitter.emit("BookingCancelled", booking);

    return booking;
}

module.exports = {
    cancelBooking
};