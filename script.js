let currentPlayer = 'X';
let gameBoard = Array(9).fill('');
let gameActive = true;

function handleCellClick(index) {
    if (!gameBoard[index] && gameActive) {
        gameBoard[index] = currentPlayer;
        updateBoard();
        checkWinner();
        togglePlayer();
    }
}

function updateBoard() {
    document.querySelectorAll('.cell').forEach((cell, index) => cell.textContent = gameBoard[index]);
}

function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
    const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (const [a, b, c] of winPatterns) {
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
            displayResult(`Player ${gameBoard[a]} wins!`);
            return;
        }
    }

    if (!gameBoard.includes('')) {
        displayResult("It's a draw!");
    }
}

function displayResult(message) {
    document.getElementById('message').textContent = message;
    gameActive = false;
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard.fill('');
    gameActive = true;
    document.getElementById('message').textContent = '';
    updateBoard();
}
n  