const fibonacci = function(count) {
    count = Number(count);
    if(count === 0){
        return 0;
    }
    if(count < 0){
        return 'OOPS';
    }
    if(count === 1){
        return 1;
    }
    let first = 0;
    let second = 1;
    let current = 0;

    for(let i = 1; i < count; i++) {
        current = first + second;
        first = second;
        second = current;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
