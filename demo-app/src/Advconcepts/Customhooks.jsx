import React, { useState, useEffect } from "react";

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return width;
}

function App() {
    const width = useWindowWidth();

    return (
        <div>
            <h1>Window Width: {width}px</h1>
        </div>
    )
}

export default App;