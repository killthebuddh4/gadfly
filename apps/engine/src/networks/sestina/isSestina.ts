export const isSestina = (text: string): boolean => {
  console.log("CALLING isSestina");

  const lines = text
    .split("\n")
    .filter((l) => l.length > 0)
    .map((line) => line.trim())
    .filter((l) => l.length > 0);
  const one = lines.slice(0, 6);
  const two = lines.slice(6, 12);
  const three = lines.slice(12, 18);
  const four = lines.slice(18, 24);
  const five = lines.slice(24, 30);
  const six = lines.slice(30, 36);

  const endwords = [one, two, three, four, five, six].map((stanza) => {
    const rawWords = stanza.map((line) => line.split(" ").pop());

    const words = rawWords.map((word) => {
      if (!word) {
        throw new Error("No word found");
      }

      return word.replace(/[^a-zA-Z]/g, "");
    });

    return words;
  });

  console.log(endwords);

  const patterns: Array<Array<number>> = [];

  const first = endwords[0];
  const base: Record<string, number> = {};
  base[`${first[0]}`] = 2;
  base[`${first[1]}`] = 2;
  base[`${first[2]}`] = 3;
  base[`${first[3]}`] = 4;
  base[`${first[4]}`] = 5;
  base[`${first[5]}`] = 6;

  console.log("B");

  patterns.push([1, 2, 3, 4, 5, 6]);

  endwords.forEach((stanza, i) => {
    if (i > 0) {
      const pattern = stanza.map((word) => {
        return base[word];
      });

      patterns.push(pattern);
    }
  });

  console.log("C");

  console.log(patterns);

  const tripel = lines.slice(36, 39);

  // console.log(one, two, three, four, five, six, tripel);
  return true;
};
