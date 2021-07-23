export const getRandomMileageList = (milage: number, days: number) => {
  const averagePerDay = Math.trunc(milage / days);
  const roughMilageList = new Array(days)
    .fill(0)
    .map(() => getRandomInt(averagePerDay));
  return eliminationCalculationErrors(roughMilageList, milage);
};

const eliminationCalculationErrors = (
  roughMilageList: number[],
  milage: number
): number[] => {
  const roughSum = roughMilageList.reduce((acc, item) => (acc += item), 0);
  const milageDiff = milage - roughSum;
  console.log(milageDiff);
  if (roughSum === milage) {
    return roughMilageList;
  } else if (milageDiff > 0) {
    let average = Math.trunc(milageDiff / roughMilageList.length);
    console.log("average", average);
    const milageList = roughMilageList.map((item) => {
      if (average > 0) {
        average -= 1;
        return (item += 1);
      }
      return item;
    });
    return eliminationCalculationErrors(milageList, milage);
  } else {
    let average = Math.trunc(milageDiff / roughMilageList.length);
    const milageList = roughMilageList.map((item) => {
    if (average < 0) {
        average += 1;
        return (item -= 1);
    }
    return item;
    });
    return eliminationCalculationErrors(milageList, milage);
  }
};

export const getRandomInt = (average: number) => {
  const min = average - 5;
  const max = average + 5;
  return min + Math.floor(Math.random() * (max - min + 1));
};
