import React, { DetailedHTMLProps } from "react";
import { Text } from "../../../../../../components/text";
import { Producer } from "../../../../../../services/api";

export interface ProducersProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title: string;
  data: Producer[];
}

const Producers: React.FC<ProducersProps> = ({ title, data, ...rest }) => {
  return (
    <div
      {...rest}
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 12,
      }}
    >
      <div style={{ marginBottom: 12 }}>
        <span style={{ fontSize: 16 }}>{title}</span>
      </div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr
            style={{
              textAlign: "left",
            }}
          >
            <th style={{ width: "1%", backgroundColor: "#eceff1" }}>
              <Text fontWeight="bold">Producer</Text>
            </th>
            <th style={{ width: "1%", backgroundColor: "#eceff1" }}>
              <Text fontWeight="bold">Interval</Text>
            </th>
            <th style={{ width: "1%", backgroundColor: "#eceff1" }}>
              <Text fontWeight="bold">Previous Year</Text>
            </th>
            <th style={{ width: "1%", backgroundColor: "#eceff1" }}>
              <Text fontWeight="bold">Following Year</Text>
            </th>
          </tr>
        </thead>
        <tbody role="table">
          {data.map((item) => (
            <tr role="table-item" key={item.producer}>
              <td style={{ width: "1%" }}>
                <Text>{item.producer}</Text>
              </td>
              <td style={{ width: "1%" }}>
                <Text>{item.interval}</Text>
              </td>
              <td style={{ width: "1%" }}>
                <Text>{item.previousWin}</Text>
              </td>
              <td style={{ width: "1%" }}>
                <Text>{item.followingWin}</Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Producers;
