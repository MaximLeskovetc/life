const canvas = document.getElementById('canvas');
canvas.height = 500;
canvas.width = 500;
const ctx = canvas.getContext('2d');
let mat = [];
let neighbor, score;
let maxScore = 0;
const start = document.getElementById('startgame');

for (let i = 0; i < 50; i++) {
    mat[i] = [];
    for (let j = 0; j < 50; j++) {
        mat[i][j] = 0;
    }
}

start.addEventListener('click', startGame);

canvas.addEventListener('click', function (ev) {
    let x = Math.floor(ev.offsetX / 10);
    let y = Math.floor(ev.offsetY / 10);
    mat[x][y] = 1;
});

function draw() {
    ctx.clearRect(0, 0, 500, 500);
    for (let i = 0; i < 50; i++) {
        for (let j = 0; j < 50; j++) {
            if (mat[i][j] === 1) {
                ctx.beginPath();
                ctx.fillStyle = '#3973fa';
                ctx.rect(i * 10, j * 10, 10, 10);
                ctx.fill();
                ctx.closePath();
            }
        }
    }
    requestAnimationFrame(draw);
}

function startGame() {
    let score = 0;
    for (let i = 0; i < 50; i++) {
        for (let j = 0; j < 50; j++) {
            if (mat[i][j] === 0) {
                neighbor = 0;
                if (mat[i][ftp(j) + 1] === 1) {
                    neighbor++;
                }
                if (mat[i][ftm(j) - 1] === 1) {
                    neighbor++;
                }
                if (mat[ftp(i) + 1][j] === 1) {
                    neighbor++;
                }
                if (mat[ftm(i) - 1][j] === 1) {
                    neighbor++;
                }
                if (mat[ftp(i) + 1][ftp(j) + 1] === 1) {
                    neighbor++;
                }
                if (mat[ftp(i) + 1][ftm(j) - 1] === 1) {
                    neighbor++;
                }
                if (mat[ftm(i) - 1][ftp(j) + 1] === 1) {
                    neighbor++;
                }
                if (mat[ftm(i) - 1][ftm(j) - 1] === 1) {
                    neighbor++;
                }
                if (neighbor === 3) {
                    mat[i][j] = 1;
                }
            }
            if (mat[i][j] === 1) {
                neighbor = 0;
                if (mat[i][ftp(j) + 1] === 1) {
                    neighbor++;
                }
                if (mat[i][ftm(j) - 1] === 1) {
                    neighbor++;
                }
                if (mat[ftp(i) + 1][j] === 1) {
                    neighbor++;
                }
                if (mat[ftm(i) - 1][j] === 1) {
                    neighbor++;
                }
                if (mat[ftp(i) + 1][ftp(j) + 1] === 1) {
                    neighbor++;
                }
                if (mat[ftp(i) + 1][ftm(j) - 1] === 1) {
                    neighbor++;
                }
                if (mat[ftm(i) - 1][ftp(j) + 1] === 1) {
                    neighbor++;
                }
                if (mat[ftm(i) - 1][ftm(j) - 1] === 1) {
                    neighbor++;
                }
                if (neighbor > 3 || neighbor < 2) {
                    mat[i][j] = 0;
                }
                score++;
            }
        }
    }
    document.querySelector('.score').innerHTML = score;
    if (maxScore < score) {
        maxScore = score;
        document.querySelector('.maxScore').innerHTML = maxScore;
    }
    if (score === 0) {
        gameOver();
    }
    requestAnimationFrame(startGame);
}

function gameOver() {
    ctx.beginPath();
    ctx.font = "30px Arial";
    ctx.fillStyle = "#9a0b0a";
    ctx.fillText('Вы проиграли !', 30, 30);
    ctx.fill();
    ctx.closePath()
}

function ftp(i) {
    if (i === 49) {
        return i = 0;
    }

    return i;
}

function ftm(i) {
    if (i === 0) {
        return i = 49;
    }
    return i;
}

draw();