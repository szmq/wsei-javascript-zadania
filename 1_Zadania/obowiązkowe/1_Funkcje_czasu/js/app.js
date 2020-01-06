function countHello(number) {
    let count = 0;

    const x = setInterval(() => {
        count++;
        console.log('Hello', count);

        if(number === count) {
            clearInterval(x);
        }
    }, 500);
}
