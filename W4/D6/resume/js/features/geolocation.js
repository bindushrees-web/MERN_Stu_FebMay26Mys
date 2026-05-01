function initGeolocation() {
    const el = document.getElementById("location-msg");

    if (!el) return;

    navigator.geolocation.getCurrentPosition(async function (position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
            );

            const data = await res.json();

            const city =
                data.address.city ||
                data.address.town ||
                data.address.village ||
                "your area";

            el.textContent = `📍 You are browsing from ${city}`;
        } catch (err) {
            el.textContent = "Location detected, but failed to fetch city";
        }
    },
    function () {
        el.textContent = "Location permission denied ❌";
    });
}