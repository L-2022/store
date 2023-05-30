// function to generate Fibonacci sequence
function fibonacci(n) {
    let a = 0, b = 1, c;
    const fib = [0, 1];
    while (a + b <= n) {
        c = a + b;
        fib.push(c);
        a = b;
        b = c;
    }
    return fib;
}

// call the function and print the Fibonacci sequence up to 190
console.log(fibonacci(190));


fetch('https://example.com/api/object/1')
    .then(response => response .json())
    .then(data => {
        console.log(data); // реєструвати отриманий об’єкт на консолі
// зробити щось з об’єктом тут
    })
    .catch(error => {
        console.error(' Помилка отримання об, помилка')
// обробка помилки тут
    });