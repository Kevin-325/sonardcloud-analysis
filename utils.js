// Fonction simple à analyser par SonarCloud
function addition(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Les deux valeurs doivent être des nombres !");
  }
  return a + b;
}

// Fonction volontairement mal écrite (SonarCloud la détectera)
function uselessFunction() {
  let x = 10;
  return x;
  return x + 1; // Code mort
}

module.exports = { addition };
