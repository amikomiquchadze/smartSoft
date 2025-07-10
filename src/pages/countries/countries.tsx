import { useState, useEffect, type SetStateAction } from "react";

import * as S from "./Countries.Styled";

import {
  fetchCountries,
  fetchIndependentCountries,
  fetchByCurrency,
  normalizeCountries,
  type CountryRow,
} from "../../api/countries";


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
      ? () => fetchByCurrency(currency)
      : independentOnly
      ? fetchIndependentCountries
      : fetchCountries;

    loader()
      .then((res) => setRows(normalizeCountries(res.data)))
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

  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const pageRows = rows.slice(startIndex, startIndex + itemsPerPage);

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
              onChange={(e: { target: { value: SetStateAction<string>; }; }) => {
                setCurrency(e.target.value);
                setIndependent(false);
              }}
            >
              <option value="">All</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
            </S.Select>
          </S.FilterLabel>
        </S.TitleRow>

        <S.TableWrapper>
          <S.Table>
            <thead>
              <S.Tr>
                <S.Th>Region</S.Th>
                <S.Th>Country</S.Th>
                <S.Th>Capital</S.Th>
                <S.Th>Currency</S.Th>
                <S.Th>Language</S.Th>
              </S.Tr>
            </thead>
            <tbody>
              {pageRows.map((r, i) => (
                <S.Tr key={`${r.name}-${startIndex + i}`}>
                  <S.Td data-label="Region">{r.region}</S.Td>
                  <S.Td data-label="Country">{r.name}</S.Td>
                  <S.Td data-label="Capital">{r.capital}</S.Td>
                  <S.Td data-label="Currency">{r.currencies}</S.Td>
                  <S.Td data-label="Language">{r.languages}</S.Td>
                </S.Tr>
              ))}
            </tbody>
          </S.Table>
        </S.TableWrapper>

        <S.PaginationContainer>
          <S.PageButton
            disabled={page <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </S.PageButton>
          <S.PageIndicator>
            Page {page} of {totalPages}
          </S.PageIndicator>
          <S.PageButton
            disabled={page >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            Next
          </S.PageButton>
        </S.PaginationContainer>
      </S.Card>
    </S.Container>
  );
}
