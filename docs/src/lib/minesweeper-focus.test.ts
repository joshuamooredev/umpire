import { describe, expect, it } from "bun:test";
import { moveFocus } from "./minesweeper-focus.js";

describe("moveFocus", () => {
  it("moves horizontally and wraps within the row", () => {
    expect(moveFocus("right", 7, 3, 8, 8)).toEqual({ x: 0, y: 3 });
    expect(moveFocus("left", 0, 3, 8, 8)).toEqual({ x: 7, y: 3 });
  });

  it("moves vertically and wraps within the column", () => {
    expect(moveFocus("down", 4, 7, 8, 8)).toEqual({ x: 4, y: 0 });
    expect(moveFocus("up", 4, 0, 8, 8)).toEqual({ x: 4, y: 7 });
  });

  it("moves to the start or end of the current row", () => {
    expect(moveFocus("home", 4, 3, 8, 8)).toEqual({ x: 0, y: 3 });
    expect(moveFocus("end", 4, 3, 8, 8)).toEqual({ x: 7, y: 3 });
  });
});
