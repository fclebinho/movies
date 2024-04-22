import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import render from "../../tests/utils";
import DashboardPage from ".";
import { Wrapper } from "../../tests/utils/wrapper";
import * as mock from "../../tests/mocks";
import { useFetchStudios } from "../../hooks/fetch-studios";
import { useFetchProducers } from "../../hooks/fetch-producers";
import { useFetchWinners } from "../../hooks/fetch-winners";
import { useFetchWinningFilms } from "../../hooks/fetch-winning-films";

vi.mock("../../hooks/fetch-studios");
vi.mock("../../hooks/fetch-producers");
vi.mock("../../hooks/fetch-winners");
vi.mock("../../hooks/fetch-winning-films");

describe("Dashabord Page", () => {
  beforeEach(() => {
    vi.mocked(useFetchProducers).mockReturnValue({
      isPending: false,
      error: null,
      data: mock.producers,
    });
    vi.mocked(useFetchStudios).mockReturnValue({
      isPending: false,
      error: null,
      data: mock.studios,
    });
    vi.mocked(useFetchWinners).mockReturnValue({
      isPending: false,
      error: null,
      data: mock.winners,
    });
    vi.mocked(useFetchWinningFilms).mockReturnValue({
      isPending: false,
      error: null,
      data: mock.movies,
    });
  });

  it("Should render dashboard page", () => {
    render(
      <Wrapper>
        <DashboardPage />
      </Wrapper>
    );

    expect(screen).toBeTruthy();
  });

  it("Should show multiple winners component", () => {
    render(
      <Wrapper>
        <DashboardPage />
      </Wrapper>
    );

    expect(screen.getByTestId("multiple-winners"));
  });

  it("Should show top studios component", () => {
    render(
      <Wrapper>
        <DashboardPage />
      </Wrapper>
    );

    expect(screen.getByTestId("top-studios"));
  });

  it("Should show producers panel component", () => {
    render(
      <Wrapper>
        <DashboardPage />
      </Wrapper>
    );

    expect(screen.getByTestId("producers-panel"));
  });

  it("Should show movie winners component", () => {
    render(
      <Wrapper>
        <DashboardPage />
      </Wrapper>
    );

    expect(screen.getByTestId("movie-winners"));
  });
});
