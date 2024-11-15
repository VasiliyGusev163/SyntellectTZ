// вариант с Set()
function removeDuplicatesSet(inputString) {
    // разбиваем строку на массив слов
    const wordsArray = inputString.split(',');

    // создаем множество для удаления дубликатов
    const uniqueWordsSet = new Set(wordsArray);

    // преобразуем множество обратно в массив и затем в строку
    const uniqueWordsArray = Array.from(uniqueWordsSet);
    const resultString = uniqueWordsArray.join(',');

    return resultString;
}

const outputStringSet = removeDuplicatesSet(inputString);
console.log(outputStringSet);

// вариант с reduce()
function removeDuplicatesReduce(inputString) {
    return inputString
        .split(',')
        .reduce((acc, word) => {
            if (!acc.includes(word)) {
                acc.push(word);
            }
            return acc;
        }, [])
        .join(',');
}

const outputStringReduce = removeDuplicatesReduce(inputString);
console.log(outputStringReduce);

const inputString = "кошка,собака,лошадь,корова,кошка,собака";
