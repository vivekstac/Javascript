// create react component for progressbar which update
//  in each second and progress will update how much percentage completed

import React, { useState, useEffect } from "react";

function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 10; // increase by 10% every second
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ width: "300px", border: "1px solid #333", padding: "5px", borderRadius: "4px" }}>
            <div
                style={{
                    width: `${progress}%`,
                    height: "25px",
                    background: "green",
                    transition: "width 0.5s",
                }}
            />
            <p style={{ textAlign: "center", marginTop: "5px" }}>
                {progress}% Completed
            </p>
        </div>
    );
}

export default ProgressBar;
