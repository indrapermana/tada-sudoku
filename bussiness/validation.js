const checkRows = (grid) => {
    console.log('Checking rows');
    grid.map((val, i, arr) => {
        if (isValidRow(val) === false) {
            return false;
        }
    });
    return true;
}

const isValidRow = (rows) => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.map((val, i, arr) => {
        if (!rows.includes(val)) {
            return false;
        }
    });
    return true;
}

const checkColumns = (grid) => {
    console.log('Checking columns');
    let columns = [];
    for (i = 0; i < 9; i++) {
        let newC = [];
        grid.map((val, i, arr) => {
            newC.push(val[i]);
        })
        columns.push(newC);
    }
    return checkRows(columns);
}

const checkSquares = (grid) => {
    console.log('Checking squares');
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

exports.validateSudoku = (grid) => {
    if (checkRows(grid) === true) {
        console.log('rows are okay');
        if (checkColumns(grid) === true) {
            console.log('columns are okay');
            if (checkSquares(grid) === true) {
                console.log('squares are okay');
                return true;
            }
        }
    }
    return false;
}