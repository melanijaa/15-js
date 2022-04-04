function reverseString(text) {
    let reverse = '';
    
    for (let i = 0; i < text.length; i++) {
        const position = text.length -1 -i;
        reverse += text[position];
    }

    return reverse;
}

console.log(reverseString('abc'), '-->', 'cba');

function reverseString2(text) {
    let reverse = '';

    for (let i = 0; i < text.length; i++) {
    reverse += text[i];
    }

    return reverse;
}

console.log(reverseString2('labas'), '-->', 'sabal');

function reverseString3(text) {
    let reverse = '';

    for (let i = text.length - 1 ; i > 0; i--) {
        reverse += text[i];
    }

    return reverse;
}


console.log(reverseString3('abcdef'), '-->', 'fedcba');
