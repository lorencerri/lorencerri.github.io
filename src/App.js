import React from "react";
import "./App.css";
import { Card } from "./Card.jsx";
import projects from "./projects.json";

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
                <font size="4" style={{ margin: 10 }}>
                    Notable Projects
                </font>
                {projects.map((data) => {
                    if (data.icon)
                        data.icon = require(`./icons/${data.icon}.svg`);
                    if (data.stats)
                        data.stats = data.stats.map((stat) => ({
                            ...stat,
                            icon: require(`./icons/${stat.icon}.svg`),
                        }));
                    return <Card {...data}></Card>;
                })}
            </header>
        </div>
    );
}

export default App;
