export default undefined;

type SimpleMessage = {
  body: string;
};

type Message = string | SimpleMessage;

class InvalidMessageError extends Error {
  constructor(public invalidMessage: any) {
    super("Invalid Message received!");
  }
}

/**
 * Eine (Callback-)Funktion, die eine Message entgegen nimmt, und nichts zurückliefert
 */
type MessageHandler = (m: Message) => void;

function onMessage(message: unknown, handleMessage: MessageHandler) {
  // AUFGABE:
  // -------------------------------------
  //
  // Schreibe eine Assertion-Function, die sicherstellt, dass message
  // eine gültige Message ist. Wenn die Assertion-Function feststellt,
  // dass message KEINE gültige Message ist, soll die Assertion-Function
  // einen InvalidMessageError werfen

  // Rufe deine Assertion-Funktion hier auf,
  // ...so dass dieser Aufruf keinen Compile-Fehler mehr darstellt:
  handleMessage(message);
}

function loggingMessageHandler(message: Message) {
  // AUFGABE:
  // -------------------------------------
  //
  // Schreibe eine Type-Predicate-Funktion, die prüft,
  // ob Message eine "SimpleMessage" ist
  //
  // Prüfe den Typ der message dann hier mit deiner Predicate-
  // Funktion
  //
  // Gib auf der Console dann entsprechend das "body"-
  // Property aus (falls es sich um eine SimpleMessage)
  // handelt oder die message selbst (falls es sich um einen
  // String handelt)
}

try {
  onMessage("", loggingMessageHandler);
} catch (err) {
  // AUFGABE:
  // -------------------------------------
  //
  // Behandle den Fehler! Wenn es sich um einem
  //  InvalidMessageError handelt, gibt dessen 'invalidMessage'
  //  Property auf der Konsole aus
  // Untersuche, welche Möglichkeiten Du hast, wenn
  // Du 'err' im catch ohne Typ (also. 'unknown') angibst, bzw.
  // wenn Du den Typ als 'any' angibst
}

// Infos:
// Unknown Type: https://www.typescriptlang.org/docs/handbook/2/functions.html#unknown
// Type Predicats: https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
// Assertion Functions: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
// Beispiel Type Guards: https://www.typescriptlang.org/play?q=29#example/type-guards
