


const som = (...ngetal) => {
    return ngetal.reduce((acc, item) => {
        acc + item;
        console.log(acc)
        return acc + item
    }
    )
}
console.log(som(1, 9, 15));

const optellen = function (num1, num2, num3) {
    return num1 + num2 + num3+num4;
}

const cijfers = [1, 2, 3,4,12];

console.log(optellen(...cijfers));
// verwachte uitkomst: 6
