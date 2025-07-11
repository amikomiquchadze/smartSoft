import axios from "axios";
import type { ApiCountry,  CountryRow } from "../model/responseInterfaces";

const BASE = "https://restcountries.com/v3.1";

export function fetchCountries() {
  return axios.get<ApiCountry[]>(
    `${BASE}/all?fields=region,name,capital,currencies,languages`
  );
}

export function fetchIndependentCountries() {
  return axios.get<ApiCountry[]>(
    `${BASE}/independent?status=true&fields=region,name,capital,currencies,languages`
  );
}

export function fetchByCurrency(code: string) {
  return axios.get<ApiCountry[]>(
    `${BASE}/currency/${code}?fields=region,name,capital,currencies,languages`
  );
}

export function normalizeCountries(data: ApiCountry[]): CountryRow[] {
  return data.map((c) => ({
    region: c.region ?? "—",
    name: c.name.common,
    capital: Array.isArray(c.capital)
      ? c.capital[0]
      : typeof c.capital === "string"
      ? c.capital
      : "—",
    currencies: c.currencies
      ? Object.values(c.currencies)
          .map((cur) => cur.name)
          .join(", ")
      : "—",
    languages: c.languages ? Object.values(c.languages).join(", ") : "—",
  }));
}
