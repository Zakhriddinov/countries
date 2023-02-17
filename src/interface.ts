export interface Language {
  name: string;
  native: string;
  rtl: boolean;
}

export interface Continent {
  name: string;
}

export interface Country {
  code: string;
  name: string;
  native: string;
  phone: string;
  capital: string;
  currency: string;
  languages: Language[];
  continent: Continent;
  emoji: string;
  states: any[];
}

export interface Data {
  countries: Country[];
}
