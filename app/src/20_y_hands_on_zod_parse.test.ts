import { z, ZodError } from "zod";

const Employee = z.object({
  name: z.string(),
  age: z.number(),
  sallary: z.number(),
});

// Erzeuge ein Person-Objekt, das folgende Properties enthält:
//   - 'name'  und 'age' aus dem Employee Objekt
//   - 'email' string
//   - KEINE weiteren Properties erlaubt!
//
// Danach sollten die beiden Testfälle unten funktionieren!
//  (npm test)

const Person: any = {};

test("correct object works", () => {
  const klaus = {
    name: "Klaus",
    age: 33,
    email: "hier@und-da.de",
  };

  expect(Person.parse(klaus).name).toBe("Klaus");
  expect(Person.parse(klaus).age).toBe(33);
});

test("invalid object with too many properties does not work", () => {
  const joe = {
    name: "Joe",
    age: 44,
    email: "joe@und-da.de",
    sallary: 40000,
  };
  expect(() => Person.parse(joe)).toThrowError(ZodError);
});

// Info: Zod Doku: https://github.com/colinhacks/zod
