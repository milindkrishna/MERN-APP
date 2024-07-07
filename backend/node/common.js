function randomNumber() {
    return Math.floor(Math.random() * 100) + 1
}

function temp(c) {
    return (c * 9) / 5 + 32
}

module.exports = {
    randomNumber,
    temp
}