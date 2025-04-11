import React from "react";
import ReactDOM from "react-dom/client";


const AppLayout = () => {
    return (
        <div>
            <h1>App Layout</h1>
            <p>This is the main layout of the app.</p>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);