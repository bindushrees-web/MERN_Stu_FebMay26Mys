import { useState } from "react";
export default function CitySelector() {
    const [city, setCity] = useState("Mysore");
    return(
        <section>
            <h2>Selected City</h2>
            <p>{city}</p>
            <button onClick={() => {
                setCity("Banglore");
            }}> Banglore </button>
            <button onClick={() => {
                setCity("Mandya");
            }}> Mandya </button>
        </section>
    )
}