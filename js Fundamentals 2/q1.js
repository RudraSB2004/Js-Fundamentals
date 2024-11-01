//Q1. Lexical Scoping with Outer and Inner Functions
function outerFunction(outerParam) {
  const outerVar = "I am an outer variable";

  return function innerFunction() {
    console.log(`Outer Parameter: ${outerParam}`);
    console.log(`Outer Variable: ${outerVar}`);
  };
}

const innerFunc = outerFunction("Outer Parameter Value");
innerFunc();

// Explanation:
// Even after `outerFunction` has finished executing, `innerFunction` still has access to `outerParam` and `outerVar`
// due to lexical scoping. This allows `innerFunction` to "remember" the variables from `outerFunction`.
