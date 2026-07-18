import React, { useState } from "react";

const FeedbackSystem = () => {
    const list = ["Readability", "Performance", "Security", "Documentation", "Testing"]
    const [voted, setVoted] = useState(
        list.reduce((acc, item) => {
            acc[item] = {
                up: 0,
                down: 0
            }
            return acc
        }, {})
    )
    const handleVoted = (key) => {
        setVoted(prev => ({
            ...prev,
            [key]: {
                ...prev[key],
                up: prev[key].up + 1
            }
        }));
    };


    const handleDownVoted = (key) => {
        setVoted(prev => ({
            ...prev,
            [key]: {
                ...prev[key],
                down: prev[key].down + 1
            }
        }));
    };

    return (
        <div className="my-0 mx-auto text-center w-mx-1200">
            <div className="flex wrap justify-content-center mt-30 gap-30">
                {list.map((item, index) => {
                    return <div key={index} className="pa-10 w-300 card">
                        <h2>{item}</h2>
                        <div className="flex my-30 mx-0 justify-content-around">
                            <button className="py-10 px-15" onClick={() => handleVoted(item)} data-testid={`upvote-btn-${index}`}>
                                👍 Upvote
                            </button>
                            <button onClick={() => { handleDownVoted(item) }} className="py-10 px-15 danger" data-testid={`downvote-btn-${index}`}>
                                👎 Downvote
                            </button>
                        </div>
                        <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
                            Upvotes: <strong>{voted[item]?.up}</strong>
                        </p>
                        <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
                            Downvotes: <strong>{voted[item]?.down}</strong>
                        </p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default FeedbackSystem;
