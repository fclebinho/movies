import { beforeAll, describe, expect, it, vi } from "vitest";
import { getStudios } from "./api";
import * as mock from "../tests/mocks";

beforeAll(() => {
  vi.resetAllMocks();
});

describe("API Services", () => {
  describe("Studios", () => {
    describe("when success", () => {
      it("should return 3 records sorted", async () => {
        vi.spyOn(window, "fetch").mockImplementationOnce(() =>
          Promise.resolve({
            json: () => Promise.resolve({ studios: mock.studios }),
          } as Response)
        );

        const list = await getStudios();

        expect(list.length).toBe(3);
        expect(list[0].winCount).toBe(6);
        expect(list[2].winCount).toBe(5);
      });

      it("should return 3 records sorted when there are more that 3 records ", async () => {
        vi.spyOn(window, "fetch").mockImplementationOnce(() =>
          Promise.resolve({
            json: () =>
              Promise.resolve({
                studios: [
                  { name: "Test 1 ", winCount: 1 },
                  ...mock.studios,
                  { name: "Test 2 ", winCount: 1 },
                  { name: "Test 3 ", winCount: 1 },
                ],
              }),
          } as Response)
        );

        const list = await getStudios();

        expect(list.length).toBe(3);
        expect(list[0].winCount).toBe(6);
        expect(list[2].winCount).toBe(5);
      });

      it("should return 2 records sorted", async () => {
        vi.spyOn(window, "fetch").mockImplementationOnce(() =>
          Promise.resolve({
            json: () =>
              Promise.resolve({
                studios: [
                  { name: "Test 2 ", winCount: 8 },
                  { name: "Test 3 ", winCount: 4 },
                ],
              }),
          } as Response)
        );

        const list = await getStudios();

        expect(list.length).toBe(2);
        expect(list[0].winCount).toBe(8);
        expect(list[1].winCount).toBe(4);
      });
    });

    describe("when Error", () => {
      it("should return 2 records", async () => {
        vi.spyOn(window, "fetch").mockImplementationOnce(() =>
          Promise.reject(Error("Error..."))
        );

        const list = await getStudios();

        expect(list.length).toBe(0);
      });
    });
  });
});
