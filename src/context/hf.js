const getWord = (words, lang, word) => {
    let i = 0;
    if(lang === 'kz') {
        i = 0;
    } else if(lang === 'ru') {
        i = 1;
    } else {
        i = 2;
    }
    return words[i][word];
}

export default getWord;