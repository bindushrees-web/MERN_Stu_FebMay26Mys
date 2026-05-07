// Synthetic Events vs Native DOM Events
// Synthetic Events: A wrapper created by React around the browser's native event system.
// Gives a consistent API acrross browsers
// works similarly to native DOM events
// Still allows access to the original browser events via event.nativeEvent

// Why does react use it?
// To make event handling behave consistently to simplify cross-browser differences
// To integrate smoothly with React's event system

// How Synthetic Events works:
// Component renders: 
        // A button appears on the screen
        // handleClick is defined but it is not executed
// User clicks the button:
        // Browser creates a native click event
        // React wraps that native event in a SyntheticEvent
        // React passes the SyntheticEvent  ot handleClick

        // event refers to the SyntheticEvent
        // event.target gives us the HTML elements