import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import render from "../../tests/utils";
import Pagination from ".";
import { Wrapper } from "../../tests/utils/wrapper";
import { useState } from "react";

let mockSearchParam = "";

vi.mock("react-router-dom", async () => {
  const mod = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...mod,
    useSearchParams: () => {
      const [params, setParams] = useState(
        new URLSearchParams(mockSearchParam)
      );
      return [
        params,
        (newParams: string) => {
          mockSearchParam = newParams;
          setParams(new URLSearchParams(newParams));
        },
      ];
    },
  };
});

describe("Pagination Component", () => {
  it("Should render component", () => {
    render(
      <Wrapper>
        <Pagination pageCount={0} perPage={5} />
      </Wrapper>
    );

    expect(screen).toBeTruthy();
  });

  it("Should show 5 page buttons", () => {
    render(
      <Wrapper>
        <Pagination pageCount={5} perPage={5} />
      </Wrapper>
    );

    expect(screen.getByText("1"));
    expect(screen.getByText("2"));
    expect(screen.getByText("3"));
    expect(screen.getByText("4"));
    expect(screen.getByText("5"));
  });

  // it("should add _page in searchParams on pagination button click", () => {
  //   const { user } = render(
  //     <Wrapper>
  //       <Pagination pageCount={3} perPage={5} />
  //     </Wrapper>
  //   );
  //
  //   const button = screen.getByTestId("pagination-item-2");
  //   user.click(button);
  //
  //   expect(mockSearchParam).toContain("_page=2&_per_page=5");
  // });
});
