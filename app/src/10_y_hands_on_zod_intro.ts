import { z } from "zod";

export default undefined;

// AUFGABE:
//
//  - Beschreibe mit 'z.object' ein Objekt ("User"), das dem
//     TypeScript Type XUser entspricht
//  - Lasse dir von Zod den TypeScript-Typen für dein User-Objekt
//     erzeugen (und nenne den Typen IUser)
//  - Unten findest Du zwei 'p'-Objekte. Lege zwei Variable vom Typ
//     'IUser' an und weise ihnen 'p1' und 'p2' zu (um sicherzustellen,
//     dass dein IUser-Typ kompatibel mit XUser ist)
type XUser = {
  lastname: string;
  firstname: string | null;
  locked: boolean;
};

const User = z.object({
  lastname: z.string(),
  firstname: z.string().nullable(),
  locked: z.boolean(),
});

type IUser = z.infer<typeof User>;

const p1: XUser = {
  lastname: "Meier",
  firstname: "Klaus",
  locked: false,
};

const p2: XUser = {
  lastname: "Meier",
  firstname: null,
  locked: false,
};

// Info: Zod Doku: https://github.com/colinhacks/zod
