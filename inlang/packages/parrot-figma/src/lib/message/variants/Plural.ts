import { Locale } from "./Locale";

export enum Plural {
	ZERO = "zero",
	ONE = "one",
	TWO = "two",
	FEW = "few",
	MANY = "many",
	OTHER = "other",
}

const pluralArrayByLanguage: { [key in Locale]: Plural[] } = {
	[Locale.AF]: [Plural.OTHER, Plural.ONE],
	[Locale.AM]: [Plural.OTHER, Plural.ONE],
	[Locale.AR]: [Plural.OTHER, Plural.ZERO, Plural.ONE, Plural.TWO, Plural.FEW, Plural.MANY],
	[Locale.AZ]: [Plural.OTHER, Plural.ONE],
	[Locale.BE]: [Plural.OTHER, Plural.ONE, Plural.FEW, Plural.MANY],
	[Locale.BG]: [Plural.OTHER, Plural.ONE],
	[Locale.BN]: [Plural.OTHER, Plural.ONE],
	[Locale.BS]: [Plural.OTHER, Plural.ONE, Plural.FEW],
	[Locale.CA]: [Plural.OTHER, Plural.ONE],
	[Locale.CS]: [Plural.OTHER, Plural.ONE, Plural.FEW, Plural.MANY],
	[Locale.CY]: [Plural.OTHER, Plural.ZERO, Plural.ONE, Plural.TWO, Plural.FEW, Plural.MANY],
	[Locale.DA]: [Plural.OTHER, Plural.ONE],
	[Locale.DE]: [Plural.OTHER, Plural.ONE],
	[Locale.EL]: [Plural.OTHER, Plural.ONE],
	[Locale.EN]: [Plural.OTHER, Plural.ONE],
	[Locale.EO]: [Plural.OTHER, Plural.ONE],
	[Locale.ES]: [Plural.OTHER, Plural.ONE],
	[Locale.ET]: [Plural.OTHER, Plural.ONE],
	[Locale.EU]: [Plural.OTHER, Plural.ONE],
	[Locale.FA]: [Plural.OTHER, Plural.ONE],
	[Locale.FI]: [Plural.OTHER, Plural.ONE],
	[Locale.FR]: [Plural.OTHER, Plural.ONE],
	[Locale.GD]: [Plural.OTHER, Plural.ZERO, Plural.ONE, Plural.TWO, Plural.FEW, Plural.MANY],
	[Locale.GL]: [Plural.OTHER, Plural.ONE],
	[Locale.GU]: [Plural.OTHER, Plural.ONE],
	[Locale.HE]: [Plural.OTHER, Plural.ONE, Plural.TWO, Plural.MANY],
	[Locale.HI]: [Plural.OTHER, Plural.ONE],
	[Locale.HR]: [Plural.OTHER, Plural.ONE, Plural.FEW, Plural.MANY],
	[Locale.HT]: [Plural.OTHER, Plural.ONE],
	[Locale.HU]: [Plural.OTHER, Plural.ONE],
	[Locale.HY]: [Plural.OTHER, Plural.ONE],
	[Locale.ID]: [Plural.OTHER, Plural.ONE],
	[Locale.IS]: [Plural.OTHER, Plural.ONE],
	[Locale.IT]: [Plural.OTHER, Plural.ONE],
	[Locale.JA]: [Plural.OTHER, Plural.ONE],
	[Locale.JV]: [Plural.OTHER, Plural.ONE],
	[Locale.KA]: [Plural.OTHER, Plural.ONE],
	[Locale.KK]: [Plural.OTHER, Plural.ONE],
	[Locale.KM]: [Plural.OTHER, Plural.ONE],
	[Locale.KN]: [Plural.OTHER, Plural.ONE],
	[Locale.KO]: [Plural.OTHER, Plural.ONE],
	[Locale.KY]: [Plural.OTHER, Plural.ONE],
	[Locale.LA]: [Plural.OTHER, Plural.ONE],
	[Locale.LB]: [Plural.OTHER, Plural.ONE],
	[Locale.LO]: [Plural.OTHER, Plural.ONE],
	[Locale.LT]: [Plural.OTHER, Plural.ONE, Plural.FEW, Plural.MANY],
	[Locale.LV]: [Plural.OTHER, Plural.ZERO, Plural.ONE, Plural.FEW, Plural.MANY],
	[Locale.MG]: [Plural.OTHER, Plural.ONE],
	[Locale.MI]: [Plural.OTHER, Plural.ZERO, Plural.ONE, Plural.TWO, Plural.FEW, Plural.MANY],
	[Locale.MK]: [Plural.OTHER, Plural.ONE],
	[Locale.ML]: [Plural.OTHER, Plural.ONE],
	[Locale.MN]: [Plural.OTHER, Plural.ONE],
	[Locale.MR]: [Plural.OTHER, Plural.ONE],
	[Locale.MS]: [Plural.OTHER, Plural.ONE],
	[Locale.MT]: [Plural.OTHER, Plural.ONE, Plural.FEW, Plural.MANY],
	[Locale.NE]: [Plural.OTHER, Plural.ONE],
	[Locale.NL]: [Plural.OTHER, Plural.ONE],
	[Locale.NO]: [Plural.OTHER, Plural.ONE],
	[Locale.NY]: [Plural.OTHER, Plural.ZERO, Plural.ONE, Plural.TWO, Plural.FEW, Plural.MANY],
	[Locale.PA]: [Plural.OTHER, Plural.ONE],
	[Locale.PL]: [Plural.OTHER, Plural.ONE, Plural.FEW, Plural.MANY],
	[Locale.PS]: [Plural.OTHER, Plural.ONE],
	[Locale.PT]: [Plural.OTHER, Plural.ONE],
	[Locale.RO]: [Plural.OTHER, Plural.ONE, Plural.FEW],
	[Locale.RU]: [Plural.OTHER, Plural.ONE, Plural.FEW, Plural.MANY],
	[Locale.SK]: [Plural.OTHER, Plural.ONE, Plural.FEW],
	[Locale.SL]: [Plural.OTHER, Plural.ONE, Plural.TWO, Plural.FEW],
	[Locale.SQ]: [Plural.OTHER, Plural.ONE],
	[Locale.SR]: [Plural.OTHER, Plural.ONE, Plural.FEW],
	[Locale.SV]: [Plural.OTHER, Plural.ONE],
	[Locale.TG]: [Plural.OTHER, Plural.ONE],
	[Locale.TL]: [Plural.OTHER, Plural.ONE],
	[Locale.TR]: [Plural.OTHER, Plural.ONE],
	[Locale.UK]: [Plural.OTHER, Plural.ONE, Plural.FEW, Plural.MANY],
	[Locale.UR]: [Plural.OTHER, Plural.ONE],
	[Locale.UZ]: [Plural.OTHER, Plural.ONE],
	[Locale.VI]: [Plural.OTHER, Plural.ONE],
	[Locale.XH]: [Plural.OTHER, Plural.ONE],
	[Locale.ZU]: [Plural.OTHER, Plural.ONE],
	[Locale.AS]: [Plural.OTHER],
	[Locale.FJ]: [Plural.OTHER],
	[Locale.GA]: [Plural.OTHER, Plural.ONE, Plural.TWO, Plural.FEW, Plural.MANY],
	[Locale.HA]: [Plural.OTHER, Plural.ONE],
	[Locale.IG]: [Plural.OTHER, Plural.ONE],
	[Locale.KU]: [Plural.OTHER, Plural.ONE],
	[Locale.MY]: [Plural.OTHER],
	[Locale.NB]: [Plural.OTHER, Plural.ONE],
	[Locale.NN]: [Plural.OTHER, Plural.ONE],
	[Locale.QU]: [Plural.OTHER, Plural.ZERO, Plural.ONE],
	[Locale.RM]: [Plural.OTHER, Plural.ONE],
	[Locale.RN]: [Plural.OTHER, Plural.ONE],
	[Locale.RW]: [Plural.OTHER, Plural.ONE],
	[Locale.SD]: [Plural.OTHER, Plural.ONE],
	[Locale.SH]: [Plural.OTHER, Plural.ONE, Plural.TWO],
	[Locale.SI]: [Plural.OTHER],
	[Locale.SM]: [Plural.OTHER, Plural.ONE],
	[Locale.SN]: [Plural.OTHER, Plural.ONE],
	[Locale.SO]: [Plural.OTHER, Plural.ONE],
	[Locale.SS]: [Plural.OTHER, Plural.ONE],
	[Locale.ST]: [Plural.OTHER, Plural.ONE],
	[Locale.SU]: [Plural.OTHER],
	[Locale.SW]: [Plural.OTHER, Plural.ONE],
	[Locale.TA]: [Plural.OTHER],
	[Locale.TE]: [Plural.OTHER],
	[Locale.TH]: [Plural.OTHER],
	[Locale.TI]: [Plural.OTHER],
	[Locale.TK]: [Plural.OTHER, Plural.ONE],
	[Locale.TN]: [Plural.OTHER, Plural.ONE],
	[Locale.TO]: [Plural.OTHER],
	[Locale.TS]: [Plural.OTHER, Plural.ONE],
	[Locale.TT]: [Plural.OTHER, Plural.ONE],
	[Locale.TW]: [Plural.OTHER],
	[Locale.TY]: [Plural.OTHER, Plural.ZERO, Plural.ONE],
	[Locale.UG]: [Plural.OTHER],
	[Locale.VO]: [Plural.OTHER, Plural.ONE, Plural.TWO],
	[Locale.YI]: [Plural.OTHER, Plural.ZERO, Plural.ONE, Plural.TWO],
	[Locale.YO]: [Plural.OTHER, Plural.ZERO, Plural.ONE],
	[Locale.ZH]: [Plural.OTHER],
};

export function getPluralFormsByLanguage(language: Locale) {
	const pluralForms = pluralArrayByLanguage[language];
	if (!pluralForms) {
		console.warn(`plural forms for ${language} not defined - retruning default (one, other)`);
		return [Plural.OTHER, Plural.ONE];
	}
	return pluralForms;
}
