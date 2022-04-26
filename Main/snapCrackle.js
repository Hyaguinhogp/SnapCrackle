function snapCrackle(maxValue){
    let str = '';
    for(let i = 1; i <= maxValue; i++){
        if( i % 2 != 0 ) str += 'Snap';
        if( i % 5 == 0 ) str += 'Crackle';
        if( i % 2 == 0 && i % 5 != 0) str += i;
        if( i < maxValue ) str += ', ';
    }
    return str;
}