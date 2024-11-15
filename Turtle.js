function daysToClimbHill(totalDistance, dayClimb, nightSlide) {
    let currentHeight = 0;
    let days = 0;

    while (currentHeight < totalDistance) {
        days++; // Увеличиваем счетчик дней
        currentHeight += dayClimb; // подъем на 50 метров

        if (currentHeight >= totalDistance) {
            return days; // возвращаем количество дней при достижении пика
        }

        currentHeight -= nightSlide; // скат на 30 метров
    }

    return days; // количество дней
}

const totalDistance = 100; // расстояние до пика
const dayClimb = 50; // подъем
const nightSlide = 30; // скат

const result = daysToClimbHill(totalDistance, dayClimb, nightSlide);
console.log(`Черепашка достигнет вершины холма за ${result} суток.`);

// ответ: на 4 день будет на вершине
