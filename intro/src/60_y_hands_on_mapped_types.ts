export default undefined;

// AUFGABE 🤔:
// Jetzt gehen wir den Weg "andersherum": wir erzeugen einen Typen aus einer Funktion u
//  und erweitern diesen
//
//  Erzeuge einen Typen für das Objekt, das enterNewPersonForm zurückliefert
//    - Der Typ soll "NewPerson" heißen
//  Erzeuge einen Typen, der NewPerson um ein id Property erweitert ("Person");
//    - Wenn Du "klaus" als "Person" deklarierst sollten keine Compile-Fehler auftreten

function enterNewPersonForm() {
  return {
    name: "Klaus",
    age: 32,
    hobby: "TypeScript",
  };
}

// klaus sollte eine 'Person' sein
const klaus = {
  id: "1",
  name: "Klaus",
  age: 34,
  hobby: "TypeScript!",
};

// https://www.typescriptlang.org/docs/handbook/utility-types.html
// https://www.typescriptlang.org/play?q=414#example/mapped-types
