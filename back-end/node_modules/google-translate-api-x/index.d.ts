export default translate;
export {translate, Translator, speak};

declare function translate<Input extends googleTranslateApi.Input> (
	input: Input,
	opts?: googleTranslateApi.RequestOptions,
): googleTranslateApi.TranslationResponseStructure<Input>;

declare class Translator {
	constructor(options?: googleTranslateApi.RequestOptions);
	translate<Input extends googleTranslateApi.Input> (
		input: Input,
		opts?: googleTranslateApi.RequestOptions,
	): googleTranslateApi.TranslationResponseStructure<Input>;
	options: googleTranslateApi.RequestOptions;
}

declare function speak<Input extends googleTranslateApi.Input> (
	input: Input,
	opts?: googleTranslateApi.RequestOptions,
): googleTranslateApi.SpeakResponseStructure<Input>;

export declare namespace googleTranslateApi {
	interface TranslationOptions {
		from?: string;
		to?: string;
		forceFrom?: boolean;
		forceTo?: boolean;
		autoCorrect?: boolean;
	}

	export interface RequestOptions extends TranslationOptions {
		tld?: string;
		requestFunction?: Function;
		forceBatch?: boolean;
		fallbackBatch?: boolean;
		requestOptions?: object;
		rejectOnPartialFail?: boolean;
	}

	interface TranslatedLanguage {
		didYouMean: boolean;
		iso: string;
	}

	interface TranslatedText {
		autoCorrected: boolean;
		value: string;
		didYouMean: boolean;
	}

	export interface TranslationResponse {
		text: string;
		pronunciation?: string;
		from: {
			language: TranslatedLanguage;
			text: TranslatedText;
		};
		raw: string;
	}

	interface OptionQuery extends TranslationOptions {
		text: string;
	}

	type Query = string | OptionQuery;

	export type Input = string | Query[] | {[key: string]: Query};

	export type TranslationResponseStructure<T> = T extends string ? Promise<TranslationResponse> : T extends Query[] ? Promise<TranslationResponse[]> : Promise<{[key in keyof T]: TranslationResponse}>;

	export type SpeakResponseStructure<T> = T extends string ? Promise<string> : T extends Query[] ? Promise<string[]> : Promise<{[key in keyof T]: string}>;

	export enum languages {
		"auto" = "Automatic",
		"af" = "Afrikaans",
		"sq" = "Albanian",
		"am" = "Amharic",
		"ar" = "Arabic",
		"hy" = "Armenian",
		"as" = "Assamese",
		"ay" = "Aymara",
		"az" = "Azerbaijani",
		"bm" = "Bambara",
		"eu" = "Basque",
		"be" = "Belarusian",
		"bn" = "Bengali",
		"bho" = "Bhojpuri",
		"bs" = "Bosnian",
		"bg" = "Bulgarian",
		"ca" = "Catalan",
		"ceb" = "Cebuano",
		"ny" = "Chichewa",
		"zh-CN" = "Chinese (Simplified)",
		"zh-TW" = "Chinese (Traditional)",
		"co" = "Corsican",
		"hr" = "Croatian",
		"cs" = "Czech",
		"da" = "Danish",
		"dv" = "Dhivehi",
		"doi" = "Dogri",
		"nl" = "Dutch",
		"en" = "English",
		"eo" = "Esperanto",
		"et" = "Estonian",
		"ee" = "Ewe",
		"tl" = "Filipino",
		"fi" = "Finnish",
		"fr" = "French",
		"fy" = "Frisian",
		"gl" = "Galician",
		"ka" = "Georgian",
		"de" = "German",
		"el" = "Greek",
		"gn" = "Guarani",
		"gu" = "Gujarati",
		"ht" = "Haitian Creole",
		"ha" = "Hausa",
		"haw" = "Hawaiian",
		"iw" = "Hebrew",
		"he" = "Hebrew",
		"hi" = "Hindi",
		"hmn" = "Hmong",
		"hu" = "Hungarian",
		"is" = "Icelandic",
		"ig" = "Igbo",
		"ilo" = "Ilocano",
		"id" = "Indonesian",
		"ga" = "Irish",
		"it" = "Italian",
		"ja" = "Japanese",
		"jw" = "Javanese",
		"kn" = "Kannada",
		"kk" = "Kazakh",
		"km" = "Khmer",
		"rw" = "Kinyarwanda",
		"gom" = "Konkani",
		"ko" = "Korean",
		"kri" = "Krio",
		"ku" = "Kurdish (Kurmanji)",
		"ckb" = "Kurdish (Sorani)",
		"ky" = "Kyrgyz",
		"lo" = "Lao",
		"la" = "Latin",
		"lv" = "Latvian",
		"ln" = "Lingala",
		"lt" = "Lithuanian",
		"lg" = "Luganda",
		"lb" = "Luxembourgish",
		"mk" = "Macedonian",
		"mai" = "Maithili",
		"mg" = "Malagasy",
		"ms" = "Malay",
		"ml" = "Malayalam",
		"mt" = "Maltese",
		"mi" = "Maori",
		"mr" = "Marathi",
		"mni-Mtei" = "Meiteilon (Manipuri)",
		"lus" = "Mizo",
		"mn" = "Mongolian",
		"my" = "Myanmar (Burmese)",
		"ne" = "Nepali",
		"no" = "Norwegian",
		"or" = "Odia (Oriya)",
		"om" = "Oromo",
		"ps" = "Pashto",
		"fa" = "Persian",
		"pl" = "Polish",
		"pt" = "Portuguese",
		"pa" = "Punjabi",
		"qu" = "Quechua",
		"ro" = "Romanian",
		"ru" = "Russian",
		"sm" = "Samoan",
		"sa" = "Sanskrit",
		"gd" = "Scots Gaelic",
		"nso" = "Sepedi",
		"sr" = "Serbian",
		"st" = "Sesotho",
		"sn" = "Shona",
		"sd" = "Sindhi",
		"si" = "Sinhala",
		"sk" = "Slovak",
		"sl" = "Slovenian",
		"so" = "Somali",
		"es" = "Spanish",
		"su" = "Sundanese",
		"sw" = "Swahili",
		"sv" = "Swedish",
		"tg" = "Tajik",
		"ta" = "Tamil",
		"tt" = "Tatar",
		"te" = "Telugu",
		"th" = "Thai",
		"ti" = "Tigrinya",
		"ts" = "Tsonga",
		"tr" = "Turkish",
		"tk" = "Turkmen",
		"ak" = "Twi",
		"uk" = "Ukrainian",
		"ur" = "Urdu",
		"ug" = "Uyghur",
		"uz" = "Uzbek",
		"vi" = "Vietnamese",
		"cy" = "Welsh",
		"xh" = "Xhosa",
		"yi" = "Yiddish",
		"yo" = "Yoruba",
		"zu" = "Zulu"
	}

	namespace languages {
		/**
		 * Returns the ISO 639-1 code of the desiredLang – if it is supported by Google Translate
		 * @param desiredLang – the name or the code(case sensitive) of the desired language
		 * @returns The ISO 639-1 code of the language or false if the language is not supported
		 */
		function getCode(desiredLang: string): string | boolean;

		/**
		 * Returns true if the desiredLang is supported by Google Translate and false otherwise
		 * @param desiredLang – the ISO 639-1 code or the name of the desired language
		 */
		function isSupported(desiredLang: string): boolean;
	}
}
