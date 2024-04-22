import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import render from "../../../../../../tests/utils";
import Producers from ".";
import * as mock from "../../../../../../tests/mocks";

describe("Producers Component", () => {
  it("Should render component", () => {
    render(<Producers title="Maximum" data={[]} />);

    expect(screen).toBeTruthy();
  });

  it("Should show component caption", () => {
    render(<Producers title="Maximum" data={[]} />);

    expect(screen.getByText("Maximum"));
  });

  it("Should have Producer, Interval, Previous Year and Following Year in the table headers", () => {
    render(<Producers title="Maximum" data={[]} />);

    expect(screen.getByText("Producer"));
    expect(screen.getByText("Interval"));
    expect(screen.getByText("Previous Year"));
    expect(screen.getByText("Following Year"));
  });

  it("Should have 1 records listed", () => {
    render(<Producers title="Maximum" data={mock.producers.max} />);

    const tableRows = screen.getAllByRole("table-item");

    expect(tableRows.length).toBe(1);
  });

  it("Should have predefined values in the table", () => {
    const producer = mock.producers.max[0];

    render(<Producers title="Maximum" data={mock.producers.max} />);

    expect(screen.getAllByText(producer.producer));
    expect(screen.getAllByText(producer.interval));
    expect(screen.getAllByText(producer.previousWin));
    expect(screen.getAllByText(producer.followingWin));
  });
});
