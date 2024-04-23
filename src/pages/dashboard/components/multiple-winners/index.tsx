import React, { DetailedHTMLProps } from "react";

import { Text } from "../../../../components/text";
import { Card, CardTitle } from "../../../../components/card";
import { useFetchWinners } from "../../../../hooks/fetch-winners";

export const MultipleWinners: React.FC<
  DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  const { error, data } = useFetchWinners();

  if (error) return "An error has occurred: " + error.message;

  return (
    <Card {...props}>
      <CardTitle>List years with multiple winners</CardTitle>
      <table style={{ width: "100%" }}>
        <thead>
          <tr
            style={{
              textAlign: "left",
            }}
          >
            <th style={{ width: "1%", backgroundColor: "#eceff1" }}>
              <Text fontWeight="bold">Year</Text>
            </th>
            <th style={{ width: "1%", backgroundColor: "#eceff1" }}>
              <Text fontWeight="bold">Win Count</Text>
            </th>
          </tr>
        </thead>
        <tbody role="table">
          {data &&
            data.map((item) => (
              <tr role="table-item" key={item.year}>
                <td style={{ width: "1%" }}>
                  <Text>{item.year}</Text>
                </td>
                <td style={{ width: "1%" }}>
                  <Text>{item.winnerCount}</Text>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Card>
  );
};
