export const calculateScore = (scores: string) => {
  const scoresArr = scores.split("").filter((score) => score !== " ");
  let totalScore = 0;
  let scoreIndex = 0;

  for (let i = 0; i < 10; i++) {
    if (scoresArr[scoreIndex] === "X") {
      totalScore += 10 + strikeBonus(scoresArr, scoreIndex);
      scoreIndex++;
    } else if (scoresArr[scoreIndex + 1] === "/") {
      totalScore += 10 + spareBonus(scoresArr, scoreIndex);
      scoreIndex += 2;
    } else {
      totalScore += frameScore(scoresArr, scoreIndex);
      scoreIndex += 2;
    }
  }
  return totalScore;
};
const strikeBonus = (scoresArr: string[], scoreIndex: number) => {
  const nextScore = scoresArr[scoreIndex + 1];
  const secondNextScore = scoresArr[scoreIndex + 2];
  return nextScore === "X"
    ? 10 + (secondNextScore === "X" ? 10 : parseInt(secondNextScore))
    : parseInt(nextScore);
};
const spareBonus = (scoresArr: string[], scoreIndex: number) => {
  const nextScore = scoresArr[scoreIndex + 2];
  return nextScore === "X" ? 10 : parseInt(nextScore);
};

const frameScore = (scoresArr: string[], scoreIndex: number) => {
  if (scoresArr[scoreIndex] === "-") {
    return parseInt(scoresArr[scoreIndex + 1]);
  } else if (scoresArr[scoreIndex + 1] === "-") {
    return parseInt(scoresArr[scoreIndex]);
  } else
    return (
      parseInt(scoresArr[scoreIndex]) + parseInt(scoresArr[scoreIndex + 1])
    );
};
