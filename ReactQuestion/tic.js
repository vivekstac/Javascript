const generateWinningPatterns = (size) => {
    const patterns = [];

    // Rows
    for (let row = 0; row < size; row++) {
        const currentRow = [];
        for (let col = 0; col < size; col++) {
            currentRow.push(row * size + col); // 0 * 3 + 0 = 0, 0 * 3 + 1 = 1, 0 * 3 + 2 = 2 for the first row, and so on. This calculates the index for the current cell in the row.
            // Calculate the index for the current cell in the row
        }
        patterns.push(currentRow);
    }

    // Columns
    for (let col = 0; col < size; col++) {
        const currentCol = [];
        for (let row = 0; row < size; row++) {
            currentCol.push(row * size + col); //0 * 3 + 0 = 0, 1 * 3 + 0 = 3, 2 * 3 + 0 = 6 for the first column, and so on. This calculates the index for the current cell in the column.
        }
        patterns.push(currentCol);
    }

    // // Main diagonal
    const mainDiagonal = [];
    for (let i = 0; i < size; i++) {
        mainDiagonal.push(i * size + i);
    }
    patterns.push(mainDiagonal);

    // Anti diagonal
    const antiDiagonal = [];
    for (let i = 0; i < size; i++) {
        antiDiagonal.push(i * size + (size - 1 - i));
    }
    patterns.push(antiDiagonal);

    return patterns;
};

console.log(generateWinningPatterns(3));