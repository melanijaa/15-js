function liekana(nuo, iki, daliklis) {
    let count = 0;
    for (let i = nuo; i <= iki; i++) {
        if (i % daliklis === 0) {
            count++
        }
    }
    return `Skaiciu intervale tarp ${nuo} iki ${iki}, besidalijanciu be liekanos is ${daliklis} yra ${count} vienetai.`;
}

console.log(liekana(0, 11, 3));
console.log(liekana(0, 11, 5));
console.log(liekana(0, 11, 7));