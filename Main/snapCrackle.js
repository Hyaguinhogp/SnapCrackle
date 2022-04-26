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

function snapCracklePrime(maxValue){
    let str = '';
    for(let i = 1; i <= maxValue; i++){
        if( i % 2 == 0){
            if ( i != 2 ) {
                if( i % 5 == 0) {
                    str += 'Crackle'
                } else str += i;
            }
        } else {
            str += 'Snap';
            if( i % 5 == 0) str += 'Crackle';
        }


        let divisorCount = 0;
        for(let j = 1; j <= i; j++){
            if( i % j == 0) divisorCount++;
        }
        if(divisorCount == 2) str += 'Prime';
        divisorCount = 0;

        if( i < maxValue ) str += ', ';
    }
    return str;
}