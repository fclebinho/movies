import { beforeEach, describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import render from "../../../../tests/utils";
import ProducersPanel from ".";
import { useFetchProducers } from "../../../../hooks/fetch-producers";
import * as mock from "../../../../tests/mocks";

vi.mock("../../../../hooks/fetch-producers");

describe("Producers Panel Component", () => {
  beforeEach(() => {
    vi.mocked(useFetchProducers).mockReturnValue({
      isPending: false,
      error: null,
      data: mock.producers,
    });
  });

  it("Should render component", () => {
    render(<ProducersPanel />);

    expect(screen).toBeTruthy();
  });

  describe("with a error", () => {
    beforeEach(() => {
      vi.mocked(useFetchProducers).mockReturnValue({
        isPending: false,
        error: Error("testing..."),
        data: undefined,
      });
    });

    it("Should display an error message when the result is an error", async () => {
      render(<ProducersPanel />);

      expect(await screen.findAllByText("An error has occurred: testing..."));
    });
  });

  it("Should show component caption", () => {
    render(<ProducersPanel />);

    expect(
      screen.getByText(
        "Producers with longest and shortest interval between wins"
      )
    );
  });

  it("Should show block maximum caption", () => {
    render(<ProducersPanel />);

    expect(screen.getByTestId("producers-maximum-block"));
  });

  it("Should show block minimum caption", () => {
    render(<ProducersPanel />);

    expect(screen.getByTestId("producers-minimum-block"));
  });
});
