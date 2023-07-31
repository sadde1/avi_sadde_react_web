import { EnumStringKeys } from "./stringKeys";
import { engmessages } from "./eng";
import { hebmessages } from "./heb";

const LOCALES = {
  ENGLISH: "en",
  HEBREW: "he",
};

const messages = {
  [LOCALES.ENGLISH]: engmessages,
  [LOCALES.HEBREW]: hebmessages,
};

const heblocales = ["he", "he-IL", "he_IL", "he_il", "he-il"];

export const langLocale = navigator.language;
export const isRTL = heblocales.includes(langLocale);
export const langMessages = isRTL
  ? messages[LOCALES.HEBREW]
  : messages[LOCALES.ENGLISH];

export function GetString(key) {
  return langMessages[key];
}
