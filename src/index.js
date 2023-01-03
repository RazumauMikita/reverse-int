module.exports = function reverse (n) {
    let b = Math.abs(n);
    return String(b).split('').reverse().join('');
}
