describe("muck around", () => {
  it("happy path", () => {
    expect(1).toBe(1);
  });
});
function add(a, b) {
  return a + b;
}
test("add", () => {
  const res = add(1, 2);
  expect(res).toBe(3);
});
function combineObject(obj1, obj2) {
  Object.assign(obj1, obj2);
  return obj1;
}
test("correct result", () => {
  const res = combineObject({ a: "A" }, { b: "B" });
  expect(res).toEqual({ a: "A", b: "B" });
});
test("should mutate original", () => {
  const obj1 = { a: "A" };
  const res = combineObject(obj1, { b: "B" });
  expect(res).toEqual({ a: "A", b: "B" });
  expect(obj1).toBe(res);
});
function mockMongoCreate(input) {
  return { _id: Math.PI, ...input };
}

test("another test", () => {
  const result = mockMongoCreate({ one: "1" });
  expect(result).toMatchObject({ one: "1" });
});
