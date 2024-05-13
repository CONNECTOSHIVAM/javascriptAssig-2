let count = 10;

const counDown = () => {
    console.log(count++)
    if (count === 22) {
        clearInterval(timer);
    }
}

const timer = setInterval(counDown, 1000);