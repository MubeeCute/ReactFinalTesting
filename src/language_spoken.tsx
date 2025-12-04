import languageCodes from "./utils/languageCodes";
import httpRequest from "./utils/http-request";
import "regenerator-runtime/runtime";

const { languageInEnglish, alpha2Codes } = languageCodes;

const capitalize = (language: string) => {
  return language.charAt(0).toUpperCase() + language.toLowerCase().slice(1);
};

const getAlpha2Code = (language: string) => {
  const codeIndex = languageInEnglish.indexOf(language);
  return codeIndex >= 0 ? alpha2Codes[codeIndex] : undefined;
};

const countryExtractor = (
  countries: Array<{ name: string; [key: string]: any }>
) => {
  return countries.map((c) => c.name);
};

const countryListLookup = async (alpha2Code: string | number) => {
  try {
    const res = await httpRequest(alpha2Code);
    return countryExtractor(res.data);
  } catch (error) {
    return undefined;
  }
};

const getResponse = (language: string, listOfPlaces: string[] = []) => {
  return `${capitalize(language)} is spoken in ${listOfPlaces.length} countries around the world`;
};

const languageSpoken = {
  countryExtractor
};

export {
  capitalize,
  getAlpha2Code,
  countryExtractor,
  countryListLookup,
  getResponse,
  languageSpoken
};