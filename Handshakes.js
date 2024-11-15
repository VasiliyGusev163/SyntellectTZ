function countHandshakes(numPeople) {
    return (numPeople * (numPeople - 1)) / 2;
}

const numberOfPeople = 10;
const totalHandshakes = countHandshakes(numberOfPeople);
console.log(`Количество рукопожатий для ${numberOfPeople} человек: ${totalHandshakes}`);

// ответ: 45 рукопожатий
