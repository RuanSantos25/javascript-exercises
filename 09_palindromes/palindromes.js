const palindromes = function (words) {
    let string = "";
    let stringReverse = "";
    const checkIsAlphanumeric = /^[a-zA-Z0-9]+$/;
    for (let i = 0; i < words.length; i++) {
        if (checkIsAlphanumeric.test(words[i])) {
            string += words[i].toLowerCase();
        }
    }
    stringReverse = string.split("").reverse().join("");
    if (string === stringReverse) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
