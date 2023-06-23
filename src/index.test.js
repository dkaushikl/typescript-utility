import { it, expect, describe } from "vitest";
import names from ".";

describe("all function should be available", () => {
  it("should have a list of all available names", () => {
    expect(isArrayOfStrings(names.all)).toBeTruthy();
    expect(isArrayOfStrings(names.all)).toMatchSnapshot()
  });

  it("should allow me to get a random name from the list", () => {
    expect(isIncludedIn(names.random)).toBeTruthy();
  });

  it("should allow me to get a random name from the list", () => {
    expect(isIncludedIn(names.all)("John")).toBeFalsy();
  });
});

function isArrayOfStrings(array) {
  return array.every((i) => typeof i === "string");
}

function isIncludedIn(array) {
  return (item) => array.includes(item);
}
