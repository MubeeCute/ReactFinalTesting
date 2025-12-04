import { countryExtractor, countryListLookup } from "./language_spoken.tsx";

import { it, expect } from '@jest/globals';

it("converts array of country data objects to array of countries", () => {
  const countriesAllData = [
    { name: "Argentina", capital: "Buenos Aires" },
    { name: "Belize", capital: "Belmopan" },
    { name: "Bolivia", capital: "Sucre" }
  ];

  const countryNames = ["Argentina", "Belize", "Bolivia"];

  const actual = countryExtractor(countriesAllData);

  expect(actual).toEqual(countryNames);
});