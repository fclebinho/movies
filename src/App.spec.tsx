import { describe, it, expect } from "vitest";
import render from "./tests/utils";
import App from "./App";

describe("App", () => {
  it("Should render app component", () => {
    const { user } = render(<App />);

    console.log(user);

    expect(screen).toBeTruthy();
  });
});
