import { calculateScore } from "./score";
describe("Given a string of scores should return the final score for the game", () => {
  test("", () => {
    expect(calculateScore("X X X X X X X X X X X X")).toBe(300);
  });
  test("", () => {
    expect(calculateScore("9- 9- 9- 9- 9- 9- 9- 9- 9- 9-")).toBe(90);
  });
  test("", () => {
    expect(calculateScore("5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5")).toBe(150);
  });
});
