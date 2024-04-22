import { describe, expect, it } from "vitest";
import render from "../../tests/utils";
import { Wrapper } from "../../tests/utils/wrapper";
import InputFilterWinner from ".";

describe("Input Filter Winner Component", () => {
  it("Should render component", async () => {
    render(
      <Wrapper>
        <InputFilterWinner />
      </Wrapper>
    );

    expect(screen).toBeTruthy();
  });
});
