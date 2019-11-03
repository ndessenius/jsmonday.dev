import * as moment from "moment";
import * as R from "ramda";
import * as S from "sanctuary";
import { Either } from "./types";

/**
 * @function shuffleArray
 * @param {any[]} arr
 * @returns {any[]}
 * @sign shuffleArray :: [a] -> [a]
 */

export const shuffleArray = (arr: any[]) => arr.sort(() => Math.random() - 0.5);

/**
 * @function getRandomBetween
 * @argument {number} min
 * @argument {number} max
 * @argument {boolean} float
 * @returns {number} a random number between min and max numbers.
 * @sign getRandomBetween :: Int -> Int -> Bool -> Int
 */

export const getRandomBetween = R.curry(
  (min: number = 0, max: number, float: boolean = false) => {
    const random = Math.random() * (max - min) + min;
    return float ? random : Math.floor(random);
  }
);

/**
 * @function pickRandomElements
 * @argument {any[]} arr
 * @argument {number} howMany
 * @returns {Either<Error, number>}
 * @sign pickRandomElements :: [a] -> Int -> Either Error number
 */

export const pickRandomElements = R.curry(
  (arr: any[], howMany: number): Either<Error, number> => {
    return howMany > R.length(arr)
      ? S.Left(
          Error(
            `Cannot get ${howMany} elements out of an array with ${R.length(
              arr
            )} elements`
          )
        )
      : S.Right(R.take(howMany, shuffleArray(arr)));
  }
);

/**
 * @function formatDate
 * @param {Date} date
 * @param {String} format
 * @returns {String}
 */

export const formatDate = (date: Date, format: string): string =>
  moment(date).format(format);

/**
 * @function buildAuthorUri
 * @param {Number} id
 * @param {String} name
 * @returns {String}
 */

export const buildAuthorUri = R.curry(
  (id: number, name: string) => `/authors/${id}/${name}`
);
