const validation = require('../bussiness/validation');

test('testing isValidRow function', () => {
    let row = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = validation.isValidRow(row);
    expect(result).toBe(true);

    row = [1, 1, 2, 3, 4, 5, 6, 7, 8];
    result = validation.isValidRow(row);
    expect(result).toBe(false);
});

const validGrid = [
    [2, 7, 5, 1, 9, 8, 3, 6, 4],
    [1, 4, 3, 5, 7, 6, 9, 2, 8],
    [8, 9, 6, 2, 4, 3, 1, 7, 5],
    [3, 2, 8, 4, 6, 1, 7, 5, 9],
    [4, 5, 7, 9, 8, 2, 6, 1, 3],
    [6, 1, 9, 7, 3, 5, 4, 8, 2],
    [7, 8, 1, 3, 2, 4, 5, 9, 6],
    [5, 3, 2, 6, 1, 9, 8, 4, 7],
    [9, 6, 4, 8, 5, 7, 2, 3, 1]
];

const notValidGrid = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
]
test('testing validateSudoku', () => {
    let result = validation.validateSudoku(validGrid);
    expect(result).toBe(true);

    result = validation.validateSudoku(notValidGrid);
    expect(result).toBe(false);
})