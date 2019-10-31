import * as S from "sanctuary";
import * as U from "../src/utils";

test("Testing `shuffleArray` funciton", () => {

  const cases = [
    [1, 2, 3, 4, 5, 6, 7],
    ["a", "b", "c", "d", "e", "f"],
    [{a: 1}, {b: 2}, {c: 3}, {d: 4}],
  ];

  for (const testCase of cases) {
    const shuffled = U.shuffleArray(testCase);
    expect(shuffled.length).toBe(testCase.length);
  }

});

test("Testing `getRandomBetween` function", () => {

  expect(U.getRandomBetween(10, 15)).toBeGreaterThanOrEqual(10);
  expect(U.getRandomBetween(10, 15)).toBeLessThanOrEqual(15);
  expect(U.getRandomBetween(4.4, 9.9, true)).toBeGreaterThanOrEqual(4.4);
  expect(U.getRandomBetween(4.4, 9.9, true)).toBeLessThanOrEqual(9.9);

});

test("Testing `pickRandomElements` function", () => {

  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

  const re1  = U.pickRandomElements(arr1, 2);
  const re2  = U.pickRandomElements(arr1, 15);

  expect(S.isRight(re1)).toBeTruthy();
  expect(S.isLeft(re2)).toBeTruthy();

  const fromEither1 = S.fromEither([])(re1);
  const fromEither2 = S.fromEither([])(re2);

  fromEither1.forEach((el) => expect(arr1.indexOf(el)).toBeGreaterThan(-1));

  expect(fromEither2.length).toBe(0);

});