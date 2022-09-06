function main() {
    let valueInput = 2.75 * 100;

    let valueReturn = [Math.floor(valueInput/100)];
    let rest = Math.floor(valueInput%100);

    if(rest != 0){
        valueReturn.push(Math.floor(rest/50));
        rest = Math.floor(rest%50);
    }
    if(rest != 0){
        valueReturn.push(Math.floor(rest/25));
        rest = Math.floor(rest%25);
    }
    if(rest != 0){
        valueReturn.push(Math.floor(rest/10));
        rest = Math.floor(rest%10);
    }
    if(rest != 0){
        valueReturn.push(Math.floor(rest/5));
        rest = Math.floor(rest%5);
    }

    return valueReturn;
}
