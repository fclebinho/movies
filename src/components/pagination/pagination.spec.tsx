import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import render from "../../tests/utils";
import Pagination from ".";

describe("Pagination Component", () => {
  it("Should render component", () => {
    render(<Pagination pageCount={0} />);

    expect(screen).toBeTruthy();
  });

  it("Should show 5 page buttons", () => {
    render(<Pagination pageCount={5} />);

    expect(screen.getByText("1"));
    expect(screen.getByText("2"));
    expect(screen.getByText("3"));
    expect(screen.getByText("4"));
    expect(screen.getByText("5"));
  });

  describe("Page selection", () => {
    it("Should select the first page", async () => {
      let page = -1;
      const handlePageChange = (value: number) => {
        page = value;
      };

      const { user } = render(
        <Pagination pageCount={5} onPageChange={handlePageChange} />
      );

      await user.click(screen.getByTestId("pagination-item-0"));

      expect(page).toBe(0);
    });

    it("Should select the next page", async () => {
      let page = -1;
      const handlePageChange = (value: number) => {
        page = value;
      };

      const { user } = render(
        <Pagination pageCount={5} onPageChange={handlePageChange} />
      );

      await user.click(screen.getByTestId("pagination-item-next"));

      expect(page).toBe(1);
    });

    it("Should select the last page", async () => {
      let page = -1;
      const handlePageChange = (value: number) => {
        page = value;
      };

      const { user } = render(
        <Pagination pageCount={5} onPageChange={handlePageChange} />
      );

      await user.click(screen.getByTestId("pagination-item-4"));

      expect(page).toBe(4);
    });

    it("Should select the prior page", async () => {
      let page = -1;
      const handlePageChange = (value: number) => {
        page = value;
      };

      const { user } = render(
        <Pagination pageCount={5} onPageChange={handlePageChange} />
      );

      await user.click(screen.getByTestId("pagination-item-4"));
      await user.click(screen.getByTestId("pagination-item-prior"));

      expect(page).toBe(3);
    });
  });
});
