// Handles booking related operations
const bookingEmitter = require("./events");

let currentBooking = null;

function getCurrentBooking() {
    return currentBooking;
}

function clearCurrentBooking() {
    currentBooking = null;
}

function checkDuplicateBooking(movie, showTime, seatCount) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (currentBooking && 
                currentBooking.movieId === movie.id &&
                currentBooking.time === showTime.time &&
                currentBooking.seatCount === seatCount
            ) {
                return reject("Duplicate booking detected. Ticket already booked.");
            }
            resolve("No Duplicate booking found.");
        },300);
    });
}

function checkSeatsAvailability(showTime, seatCount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (showTime.seatsAvailable < seatCount) {
                return reject(`Only ${showTime.seatsAvailable} seat(s) are available`);
            }
            resolve("Seats are available");
        },300);
    });
}

function generateBookingDetails(movie, showTime, seatCount) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const booking = {
                bookingId: `BOOK -$(Date.now())`,
                movieId: movie.id,
                movieTitle: movie.title,
                time: showTime.time,
                seatCount
            };
            resolve(booking);
        },300);
    });
}

function confirmBooking(booking, showTime) {
    return new Promise((resolve) => {
        setTimeout(() => {
            showTime.seatsAvailable -= booking.seatCount;
            currentBooking = booking;
            bookingEmitter.emit("BookingConfirmed", booking);
            resolve(booking);
        },300);
    });
}

// Promise chaining
function processBooking(movie, showTime, seatCount) {
    bookingEmitter.emit("BookingStarted");

    return checkDuplicateBooking(movie, showTime, seatCount)
        .then(() => {
            bookingEmitter.emit("bookingValidated");
            return checkSeatsAvailability(showTime, seatCount);
        })
        .then(() => generateBookingDetails(movie, showTime, seatCount))
        .then((booking) => confirmBooking(booking, showTime))
        .catch((error) => {
            bookingEmitter.emit("BookingFailed",error);
            throw error;
        });
}

// async/await function
async function processBookingAsync(movie, showTime, seatCount) {
    try {
        bookingEmitter.emit("BookingStarted");

        await checkDuplicateBooking(movie, showTime, seatCount);
        bookingEmitter.emit("BookingValidated");

        await checkSeatsAvailability(showTime, seatCount);

        const booking = await generateBookingDetails(movie, showTime, seatCount);

        const confirmedBooking = await confirmBooking(booking, showTime);

        return confirmBooking;
    }
    catch(error) {
        bookingEmitter.emit("BookingFailed", error);
        throw error;
    }
}

module.exports = {
    getCurrentBooking,
    clearCurrentBooking,
    processBooking,
    processBookingAsync
};