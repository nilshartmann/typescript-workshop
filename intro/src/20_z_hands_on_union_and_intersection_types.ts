export default undefined;

// TASKS 🤔:
// 1. Modifiziere den Typ "Cat", so dass der nur eine bestimmte Anzahl gültiger Katzennamen zulässt (z.B. "Puffy", "Purry" und "Molly", aber NICHT "Brutus")

type ValidCatNames = "Puffy" | "Purry" | "Molly";
type Cat = {
  name: ValidCatNames;
  meow(): void;
};

// should be allowed:
const purry: Cat = {
  name: "Purry", // cool
  meow() {
    console.log("meow");
  }
};

// should not work
const brutus: Cat = {
  name: "Brutus", // not cool
  meow() {
    console.log("meow");
  }
};

// 3. Schreibe eine Funktion "runCat", die sowohl eine Cat- als auch deinen neuen Untertyp als Parameter akzeptiert
//    Wenn der Parameter "nur" eine Cat ist, gib mit console.log die Zeichenkette "slow cat" aus, andernfalls gib mit console.log den Wert von "topSpeed" aus.

type CatAndMore = Cat & {
  topSpeed: number;
};

const fastCat: CatAndMore = {
  name: "Molly",
  topSpeed: 10,
  meow: () => console.log("woooof")
};

// 3. Schreibe eine Funktion "runCat", die sowohl eine Cat- als auch deinen neuen Untertyp akzeptiert
//     If it's "only" a Cat, conolse.log the string "slow cat" otherwise console.log the value of "topSpeed"

function runCat(cat: Cat | CatAndMore) {
  if ("topSpeed" in cat) {
    console.log(cat.topSpeed);
  } else {
    console.log("slow cat");
  }
}

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
// https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
// https://www.typescriptlang.org/play?q=129#example/union-and-intersection-types
