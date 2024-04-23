import React, { DetailedHTMLProps } from "react";
import Producers from "./components/producers";
import { Card, CardTitle } from "../../../../components/card";
import { useFetchProducers } from "../../../../hooks/fetch-producers";

const ProducersPanel: React.FC<
  DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = (props) => {
  const { error, data } = useFetchProducers();

  if (error) return "An error has occurred: " + error.message;

  return (
    <Card {...props}>
      <CardTitle>
        Producers with longest and shortest interval between wins
      </CardTitle>
      <Producers
        title="Maximum"
        data={data?.max ?? []}
        data-testid="producers-maximum-block"
      />
      <Producers
        title="Minimum"
        data={data?.min ?? []}
        data-testid="producers-minimum-block"
      />
    </Card>
  );
};

export default ProducersPanel;
