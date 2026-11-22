export type Lang = 'uk' | 'en';

export const LANGS: Lang[] = ['uk', 'en'];

// A piece of content that exists in every supported language
export type Localized = Record<Lang, string>;
