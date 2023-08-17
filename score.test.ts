const calculateScore = (frames: string) => {};
describe("Given a string of frames should return the final score for the game", () => {
  test("should turn from N to W", () => {
    expect(calculateScore("X X X X X X X X X X X X")).toBe(300);
    expect(calculateScore("9- 9- 9- 9- 9- 9- 9- 9- 9- 9-")).toBe(90);
    expect(calculateScore("5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5")).toBe(150);
  });
});
