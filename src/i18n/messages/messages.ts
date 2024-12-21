import en from "./en.json";
import es from "./es.json";

export type TranslationKeys = keyof typeof en;

export const messages = {
	en,
	es,
} as const;

export const getMessage = (locale: keyof typeof messages, key: TranslationKeys) => {
  return messages[locale][key];
};
