import React, { DetailedHTMLProps } from "react";
import { Card, CardTitle } from "../../../../components/card";
import { Text } from "../../../../components/text";
import SearchYear from "./components/search-year";
import { useFetchWinningFilms } from "../../../../hooks/fetch-winning-films";

const MovieWinners: React.FC<
  DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  const { isPending, error, data } = useFetchWinningFilms();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Card {...props}>
      <CardTitle>List movie winners by year</CardTitle>
      <SearchYear placeholder="Search by year" />
      <table style={{ width: "100%" }}>
        <thead>
          <tr
            style={{
              textAlign: "left",
            }}
          >
            <th style={{ width: "1%", backgroundColor: "#eceff1" }}>
              <Text fontWeight="bold">Id</Text>
            </th>
            <th style={{ width: "1%", backgroundColor: "#eceff1" }}>
              <Text fontWeight="bold">Year</Text>{" "}
            </th>
            <th style={{ width: "1%", backgroundColor: "#eceff1" }}>
              <Text fontWeight="bold">Title</Text>{" "}
            </th>
          </tr>
        </thead>
        <tbody role="table">
          {data &&
            data.map((item) => (
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
              </tr>
            ))}
        </tbody>
      </table>
    </Card>
  );
};

export default MovieWinners;
