export const getUniqueRandomsInRange = (min: number, max: number, num: number, include: number) => {
  const answers: number[] = [];

  for (let i = 0; i < num - 1; i++) {
    let random;

    do {
      random = Math.floor(Math.random() * (max - min) + min);
    } while (
      answers.includes(random) ||
      new Set([...answers, random]).size < i + 1 ||
      random === include
    );

    answers.push(random);
  }

  answers.push(include);
  answers.sort(() => Math.random() - 0.5);
  return answers;
};
