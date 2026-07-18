import React, { useState, useEffect } from "react";

const SeacrhBar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (query.length === 0) {
            setResults([]);
            return;
        }

        const fetchResults = async () => {
            try {
                const response = await fetch(`https://api.example.com/search?q=${query}`);
                const data = await response.json();
                setResults(data);
            } catch (error) {
                console.error("Error fetching results:", error);
            }
        };

        fetchResults();
    }, [query]);

    return (
        <div>
            <input onChange={(e) => setQuery(e.target.value)} value={query} placeholder="Search..." />
            <ul>
                {results.map((item) => (<li key={item.id}>{item.name}</li>))}
            </ul>
        </div>
    )
}