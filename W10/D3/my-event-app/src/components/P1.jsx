// Basic events in React
// Event: An action triggered by the user (mouse, keyboard, DOM)
// React uses camelCase attributes like onClick, onChange..
// React passes an event object (SyntheticEvent) to the event handler

export function EventBasics() {
    // Declaring a event handler function
    const handleClick = () => alert("Clicked");

    return (
        <section>
            <h2>Event Basics</h2>
            {/* Event binding */}
            <button onClick={handleClick}>Click me</button>
        </section>
    )
}