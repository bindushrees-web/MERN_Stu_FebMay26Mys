const text = document.getElementById("location-text");

navigator.geolocation.getCurrentPosition(function(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    text.textContent = "You are browsing from Lat: " + lat + ", Lon: " + lon;
},
 function(){
    text.textContent = "Location access denied";
});