import * as R from "ramda";
import * as S from "sanctuary";
import { Either } from "./types";

/**
 * @function shuffle
 * @param {any[]} arr
 * @returns {any[]}
 * @sign shuffle :: [a] -> [a]
 */

export const shuffle = (arr: any[]) => arr.sort(() => Math.random() - 0.5);

/**
 * @function getRandomBetween
 * @argument {number} min
 * @argument {number} max
 * @argument {boolean} float
 * @returns {number} a random number between min and max numbers.
 * @sign getRandomBetween :: Int -> Int -> Bool -> Int
 */

export const getRandomBetween = R.curry((min: number = 0, max: number, float: boolean = false) => {
  const random = Math.random() * (max - min) + min;
  return float ? random : Math.floor(random);
});

/**
 * @function pickRandomElements
 * @argument {any[]} arr
 * @argument {number} number
 * @returns {Either<Error, number>}
 * @sign pickRandomElements :: [a] -> Int -> Either Error number
 */

export const pickRandomElements = R.curry((arr: any[], number: number): Either<Error, number> => {
  return number > R.length(arr)
    ? S.Left(Error(`Cannot get ${number} elements out of an array with ${R.length(arr)} elements`))
    : S.Right(R.take(number, shuffle(arr)));
});