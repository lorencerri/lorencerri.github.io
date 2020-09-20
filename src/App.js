import React from "react";

import "./App.css";

function App() {
    const Card = (repo) => {
        return (
            <div
                style={{ margin: 10 }}
                class="repo-card"
                data-repo={repo}
            ></div>
        );
    };

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
                <font size="4" style={{ margin: 10 }}>
                    Notable Projects
                </font>
                {Card("plexidev/quick.db")}
                {Card("TrueXPixels/discord-guardian")}
                {Card("TrueXPixels/powercord-reverse-image-search")}
                {Card("TrueXPixels/quick.hook")}
            </header>
        </div>
    );
}

export default App;
