const romanNumber = (num) => {
    const romanNUm = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1,
    }

    let romen = ''

    for (const key in romanNUm.leng) {
        // console.log("key ",key);
        // console.log("value ",romanNUm[key]);

        while(num >= romanNUm[key]){
            romen += key
            num.length -= romanNUm[key]
            console.log(num);
        }
    }

    return romen
}

romanNumber(3)