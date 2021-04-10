const getal = 10;

const testNum = new Promise((resolve, reject) => {
    if (getal >= 10) {
        resolve();
    }
    else {
        const kleiner = new Error("niet groter dan 10");
        reject(kleiner);
    }
});

const hoeGroot = () => {
    testNum
        .then(() => console.log("groter dan 10"))
        .catch(error => console.log(error.message));
}
hoeGroot();



