import { describe, expect, it } from "vitest";
import render from "../../../../tests/utils";
import { Wrapper } from "../../../../tests/utils/wrapper";
import { InputFilterYear } from ".";

describe("Input Filter Year Component", () => {
  it("Should render component", async () => {
    render(
      <Wrapper>
        <InputFilterYear onChange={() => {}} />
      </Wrapper>
    );

    expect(screen).toBeTruthy();
  });
});
