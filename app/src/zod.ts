import { z, ZodError } from "zod";

const User = z
  .object({
    username: z.string(),
    age: z.number(),
    favorites: z.array(z.string()).optional(),
  })
  .strict();

type IUser = z.infer<typeof User>;

test("user works", () => {
  const klaus = {
    username: "Klaus",
    age: 32,
    favorites: ["Soccer"],
  };

  // parse funktioniert als TypeGuard!
  const user: IUser = User.parse(klaus);
  expect(user.username).toBe("Klaus");

  const joe = {
    username: "Joe",
    age: 33,
  };
  const joeUser = User.parse(joe);
  expect(joeUser).toBeTruthy();
});

test("fails on invalid object", () => {
  const invalidUser = {
    username: "Klaus",
  };

  expect(() => User.parse(invalidUser)).toThrowError(ZodError);

  // User ist als 'Strict' deklariert, d.h.
  // es dürfen keine zusätzlichen Properties vorhanden sein
  const tooManyProperties = {
    username: "Klaus",
    age: 32,
    favorites: ["Soccer"],

    // --> editor ist nicht in User vorhanden
    editor: "VS Code",
  };

  expect(() => User.parse(tooManyProperties)).toThrowError(ZodError);
});

const Person = User.pick({ username: true, age: true });
type IPerson = z.infer<typeof Person>;

function mapUserToPerson(user: IUser): IPerson {
  return {
    age: user.age,
    username: user.username,
  };
}
