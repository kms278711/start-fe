function avg() {
    let sum = 0;
    let length = 0;
    if(Array.isArray(arguments[0])) {
        length = arguments[0].length;
        for(let i=0; i<arguments[0].length; i++) {
            sum += arguments[0][i];
        }
    } else {
        for(let i=0; i<arguments.length; i++) {
            if(!isNaN(arguments[i])) {
                length ++;
                sum += arguments[i];
            }
        }
    }
    return sum/length;
}

export default avg;