function initGeolocation() {
    const el = document.getElementById("location-msg");

    if (!el) return;

    if (!navigator.geolocation) {
        el.textContent = "Geolocation is not supported by your browser";
        return;
    }

    navigator.geolocation.getCurrentPosition(
        async function (position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            try {
                const res = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`,
                    {
                        headers: {
                            "User-Agent": "portfolio-app" // important for Nominatim
                        }
                    }
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch location data");
                }

                const data = await res.json();

                const city =
                    data.address.city ||
                    data.address.town ||
                    data.address.village ||
                    data.address.state || // added fallback
                    "your area";

                el.textContent = `📍 You are browsing from ${city}`;
            } catch (err) {
                console.error(err);
                el.textContent = "Location detected, but failed to fetch city";
            }
        },
        function (error) {
            if (error.code === error.PERMISSION_DENIED) {
                el.textContent = "Location permission denied ❌";
            } else {
                el.textContent = "Unable to retrieve location";
            }
        }
    );
}