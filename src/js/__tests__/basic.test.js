import orderByProps from "../basic";


test("no matching props", () => {
  const obj = {health: 10, attack: 80, defence: 40};
  const props = ["name", "level"]; 
  const result = orderByProps(obj, props);
  expect(result).toEqual([
    { key: "attack", value: 80 },
    { key: "defence", value: 40 },
    { key: "health", value: 10 },
  ]);
});


test("function returns the right first object", () => {
  const obj = {name: "мечник", health: 10, level: 2, attack: 80, defence: 40};
  const result = orderByProps(obj, ["name", "level"]);
  expect(result[0]).toStrictEqual({key: "name", value: "мечник"});
});


test("function returns what expected", () => {
  const obj = {name: "мечник", health: 10, level: 2, attack: 80, defence: 40};
  const result = orderByProps(obj, ["name", "level"]);
  expect(result).toStrictEqual([
    {key: "name", value: "мечник"}, 
    {key: "level", value: 2}, 
    {key: "attack", value: 80}, 
    {key: "defence", value: 40}, 
    {key: "health", value: 10}
  ]);
});
