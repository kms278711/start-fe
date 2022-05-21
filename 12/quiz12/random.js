function random() {
    if(arguments.length == 2) {
        if(isNaN(arguments[1])) return -1;
        return Math.floor(arguments[1] * Math.random());
    } else {
        if(isNaN(arguments[0])) return -1;
        return Math.floor(arguments[0] * Math.random());
    }
}

export default random;