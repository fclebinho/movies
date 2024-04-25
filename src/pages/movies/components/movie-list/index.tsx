import React, { DetailedHTMLProps } from "react";
import { Card, CardTitle } from "../../../../components/card";
import { Text } from "../../../../components/text";
import Pagination from "../../../../components/pagination";
import { InputFilterYear } from "../input-filter-year";
import { PaginatedMovies } from "../../../../services/api";
import { useSearchParams } from "react-router-dom";
import Select from "../../../../components/select";

interface MovieListProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  data: PaginatedMovies | undefined;
  perPage: number;
}

export const MovieList: React.FC<MovieListProps> = ({
  data,
  perPage,
  ...rest
}) => {
  const [params, setParams] = useSearchParams({
    page: "0",
    size: String(perPage),
  });

  const handlePageChange = (value: number) => {
    setParams((state) => {
      state.set("page", String(value));

      return state;
    });
  };

  const handleChangeYearFilter = (value: string) => {
    setParams((state) => {
      if (value) {
        state.set("year", value);
        state.set("page", "0");
      } else {
        state.delete("year");
      }

      return state;
    });
  };

  const handleChangeWinnerFilter = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setParams((state) => {
      if (e.target.value) {
        state.set("page", "0");
        state.set("winner", e.target.value);
      } else {
        state.delete("winner");
      }

      return state;
    });
  };

  return (
    <Card {...rest}>
      <CardTitle>List movies</CardTitle>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th style={{ width: "1%", backgroundColor: "#eceff1" }}>
              <Text fontWeight="bold">ID</Text>
            </th>
            <th style={{ width: "1%", backgroundColor: "#eceff1" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingInline: 12,
                  paddingBottom: 12,
                }}
              >
                <Text fontWeight="bold">Year</Text>
                <InputFilterYear
                  placeholder="Filter by year"
                  onChange={handleChangeYearFilter}
                />
              </div>
            </th>
            <th style={{ width: "1%", backgroundColor: "#eceff1" }}>
              <Text fontWeight="bold">Title</Text>
            </th>
            <th style={{ width: "1%", backgroundColor: "#eceff1" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingInline: 12,
                  paddingBottom: 12,
                }}
              >
                <Text fontWeight="bold">Winner?</Text>
                <Select
                  data-testid="search_by_winner"
                  onChange={handleChangeWinnerFilter}
                >
                  <option value="">Yes/No</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Select>
              </div>
            </th>
          </tr>
        </thead>
        <tbody role="table">
          {data &&
            data.content.map((item) => (
              <tr role="table-item" key={item.id}>
                <td style={{ width: "1%" }}>
                  <Text>{item.id}</Text>
                </td>
                <td style={{ width: "1%" }}>
                  <Text>{item.year}</Text>
                </td>
                <td style={{ width: "1%" }}>
                  <Text>{item.title}</Text>
                </td>
                <td style={{ width: "1%" }}>
                  <Text>{item.winner ? "Yes" : "No"}</Text>
                </td>
              </tr>
            ))}
          <tr>
            <td colSpan={4} style={{ backgroundColor: "#eceff1" }}>
              <Pagination
                initialPage={Number(params.get("page"))}
                pageCount={data?.totalPages ?? 1}
                onPageChange={handlePageChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
};
