function countHello1(number) {
    let count = 0;

    const x = setInterval(() => {
        count++;
        console.log('Hello', count)

        if(number === count) {
            clearInterval(x);
        }
    }, 500);
}

countHello(5);