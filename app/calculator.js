function add(a, b) {
    return a + b;
}



function subtract(x, y) {
    return x-y;
}
    

function multiply(c, d) {
    return c * d;
}
    

function isOdd(e) {
 if (e % 2 == 1)
 return true
 else
 return false
}

function divisibleBy(g, h) {
    if (g % h == 0)
    return true
    else
    return false
   }

   function checkNumberSize(i, j) {
    if (i > j)
    return  i + " is bigger than" + j
    else
    return  j + " is bigger than" + i
   }  

module.exports = {
    subtract, add, multiply, isOdd, divisibleBy, checkNumberSize
};

