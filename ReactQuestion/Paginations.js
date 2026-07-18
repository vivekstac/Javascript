import React from 'react';
import { useState } from 'react'

function App() {
    const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(items.length / itemsPerPage);

    const startIndex = (page - 1) * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

    const nextPage = () => {
        if (page < totalPages) setPage(page + 1);
    };

    const prevPage = () => {
        if (page > 1) setPage(page - 1);
    };

    return (
        <div>
            <h2>Pagination Component</h2>

            {currentItems.map((item) => (
                <div key={item}>{item}</div>
            ))}

            <button onClick={prevPage} disabled={page === 1}>
                Prev
            </button>

            <span style={{ margin: "0 10px" }}>Page {page} / {totalPages}</span>

            <button onClick={nextPage} disabled={page === totalPages}>
                Next
            </button>
        </div>
    );
}
export default App
