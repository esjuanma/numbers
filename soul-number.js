
function soulNumber(name, parseName, getLetterValue) {
    getLetterValue = getLetterValue || function(letter) {
        const letterValues = {
            a: 1,
            e: 5,
            i: 9,
            o: 16,
            u: 22
        };

        return letterValues[letter];
    }

    parseName = parseName || function(name) {
        return name.match(/[aeiou]/g);
    };

    const getVal = (val) => {
        if (val === 11 || val === 22 || val === 33) {
            console.log(`${val}! Nombre maestro!`);
        } else if (val >= 10) {
            const [n1, n2] = ('' + val).split('');
            val = Number(n1) + Number(n2);
        }

        return val;
    }

    let namesValues = name.toLowerCase().split(' ').map(name => {
        console.log('---------------------------------')
        console.log('Nombre:', name);

        const value = parseName(name).reduce((sum, letter) => {
            const letterValue = getLetterValue(letter);
            console.log('Letra', letter, letterValue);
            return sum + letterValue;
        }, 0);

        console.log('Total nombre:', value);

        return value;
    });

    console.log('---------------------------------');
    
    namesValue = namesValues.reduce((sum, val) => {
        val = getVal(val);
        
        console.log(`${sum} + ${val} = ${sum + val}`);
        
        return val + sum;
    }, 0);
    
    console.log('Totales por nombre:', namesValues);
    
    const final = getVal(namesValues.reduce((sum, val) => sum + getVal(Number(val)), 0));
    
    console.log('---------------------------------');

    console.log('Suma final:', final);

    return final;
}
