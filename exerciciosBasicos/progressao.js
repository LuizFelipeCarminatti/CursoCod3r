function aritmetica(a1, n, r) {
    let an = a1 + ( n - 1 ) * r
    console.log(an)
}
aritmetica(26, 10, 5)


function geometrica(a1, q, n) {
    let res = n - 1
    let an = a1 * Math.pow(q, res) 
    console.log(an)
}
geometrica(2, 2, 20)