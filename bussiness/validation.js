// this function is for validate every rows on the grid. member of row will be check in isValidRow function.
const checkRows = (grid) => {
    let status = true;
    grid.map((val, i, arr) => {
        if (isValidRow(val) === false) {
            status = status & false;
        } else {
            status = status & true;
        }
    });

    return status;
}

// this function will validate each member of array
const isValidRow = exports.isValidRow = (rows) => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    rows.map((val, i, arr) => {
        if (numbers.indexOf(val) !== -1) {
            numbers.splice(numbers.indexOf(val), 1);
        }
    });
    if (numbers.length !== 0) {
        return false;
    }
    return true;
}

// this function will change columns into row and then check using isValidRow function.
const checkColumns = (grid) => {
    let columns = [];
    for (j = 0; j < 9; j++) {
        let newC = [];
        grid.map((val, i, arr) => {
            newC.push(val[j]);
        })
        columns.push(newC);
    }
    return checkRows(columns);
}

// this function will change each little box (3x3) into rows and then check using isValidRow function.
const checkSquares = (grid) => {
    let squares = [];
    for (row = 0; row < 3; row++) {
        for (col = 0; col < 3; col++) {
            let square = [];
            let val = 0;
            for (i = 0; i < 3; i++) {
                for (j = 0; j < 3; j++) {
                    let indexRow = (3 * row) + i;
                    let indexCol = (3 * col) + j;
                    val = grid[indexRow][indexCol];
                    square.push(val);
                }
            }
            squares.push(square);
        }
    }

    return checkRows(squares);
}

// if checkRows and checkColumns and checkSquares are Ok, then it will return true. that means, sudoku array is valid.
exports.validateSudoku = (grid) => {
    if (checkRows(grid) == true) {
        if (checkColumns(grid) == true) {
            if (checkSquares(grid) == true) {
                return true;
            }
        }
    }

    return false;
}