import React, { DetailedHTMLProps } from "react";
import { Text } from "../../../../components/text";
import { Card, CardTitle } from "../../../../components/card";
import { useFetchStudios } from "../../../../hooks/fetch-studios";

const TopStudios: React.FC<
  DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  const { isPending, error, data } = useFetchStudios();

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Card {...props}>
      <CardTitle>Top 3 studios with winners</CardTitle>
      <table style={{ width: "100%" }}>
        <thead>
          <tr
            style={{
              textAlign: "left",
            }}
          >
            <th style={{ width: "1%", backgroundColor: "#eceff1" }}>
              <Text fontWeight="bold">Name</Text>
            </th>
            <th style={{ width: "1%", backgroundColor: "#eceff1" }}>
              <Text fontWeight="bold">Win Count</Text>
            </th>
          </tr>
        </thead>
        <tbody role="table">
          {data &&
            data.map((item) => (
              <tr role="table-studio-item" key={item.name}>
                <td style={{ width: "1%" }}>
                  <Text>{item.name}</Text>
                </td>
                <td style={{ width: "1%" }}>
                  <Text>{item.winCount}</Text>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Card>
  );
};

export default TopStudios;
