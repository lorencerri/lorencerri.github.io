import React from "react";

import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div style={{ margin: 50 }}>
                    <h3
                        style={{
                            marginBottom: 0,
                            borderBottom: "1px solid grey",
                        }}
                    >
                        TrueXPixels
                    </h3>
                    <font size="4">
                        <a href="https://github.com/truexpixels">GitHub</a>{" "}
                        &bull;{" "}
                        <a href="https://twitter.com/truexpixels">Twitter</a>
                    </font>
                </div>
            </header>
        </div>
    );
}

export default App;
