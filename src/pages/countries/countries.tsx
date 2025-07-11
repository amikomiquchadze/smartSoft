import { useState, useEffect, type SetStateAction } from "react";

import * as S from "./Countries.Styled";

import type { CountryRow } from "../../api/model/responseInterfaces";
import api from "../../api";
import { Table } from "../shared/table/Table";

export default function Countries() {
  const [rows, setRows] = useState<CountryRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [independentOnly, setIndependent] = useState(false);
  const [currency, setCurrency] = useState<string>("");

  const itemsPerPage = 15;
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
    setLoading(true);
    setError(null);

    const loader = currency
      ? () => api.countries.fetchByCurrency(currency)
      : independentOnly
      ? api.countries.fetchIndependentCountries
      : api.countries.fetchCountries;

    loader()
      .then((res) => setRows(api.countries.normalizeCountries(res.data)))
      .catch((err) => {
        console.error(err);
        setError("Failed to load countries.");
      })
      .finally(() => setLoading(false));
  }, [independentOnly, currency]);

  if (loading) {
    return (
      <S.Container>
        <S.Card>
          <S.Message>Loading…</S.Message>
        </S.Card>
      </S.Container>
    );
  }
  if (error) {
    return (
      <S.Container>
        <S.Card>
          <S.Message success={false}>{error}</S.Message>
        </S.Card>
      </S.Container>
    );
  }

  const headers = ["Region", "Country", "Capital", "Currency", "Language"];
  const currencyOptions = ["USD", "EUR"];
  return (
    <S.Container>
      <S.Card>
        <S.TitleRow>
          <S.Title>All Countries</S.Title>
          <S.CheckboxLabel>
            <input
              type="checkbox"
              checked={independentOnly}
              onChange={(e) => {
                setIndependent(e.target.checked);
                setCurrency("");
              }}
            />
            Show only independent countries
          </S.CheckboxLabel>
          <S.FilterLabel>
            Currency:
            <S.Select
              value={currency}
              onChange={(e: { target: { value: SetStateAction<string> } }) => {
                setCurrency(e.target.value);
                setIndependent(false);
              }}
            >
              <option value="">All</option>
              {currencyOptions.map((cur) => (
                <option key={cur} value={cur}>
                  {cur}
                </option>
              ))}
            </S.Select>
          </S.FilterLabel>
        </S.TitleRow>

        <Table
          headers={headers}
          rows={rows}
          page={page}
          itemsPerPage={itemsPerPage}
          setPage={setPage}
          renderRow={(r, i) => (
            <S.Tr key={`${r.name}-${i}`}>
              <S.Td data-label="Region">{r.region}</S.Td>
              <S.Td data-label="Country">{r.name}</S.Td>
              <S.Td data-label="Capital">{r.capital}</S.Td>
              <S.Td data-label="Currency">{r.currencies}</S.Td>
              <S.Td data-label="Language">{r.languages}</S.Td>
            </S.Tr>
          )}
        />
      </S.Card>
    </S.Container>
  );
}
