function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    return "This is not a whole number. Please try again with a whole number."
  }
  if (number % 2 == 0) {
    return "Even"
  } else {
    return "Odd"
  }
};