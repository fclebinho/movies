import React from "react";
import { MultipleWinners } from "./components/multiple-winners";
import TopStudios from "./components/top-studios";
import ProducersPanel from "./components/producers-panel";
import MovieWinners from "./components/movie-winners";
import { useMediaQuery } from "react-responsive";

const DashboardPage: React.FC = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div
      style={
        isDesktopOrLaptop
          ? { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }
          : undefined
      }
    >
      <MultipleWinners data-testid="multiple-winners" />
      <TopStudios data-testid="top-studios" />
      <ProducersPanel data-testid="producers-panel" />
      <MovieWinners data-testid="movie-winners" />
    </div>
  );
};

export default DashboardPage;
