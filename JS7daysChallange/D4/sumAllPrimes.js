function sumAllPrimes(num) {
  let primesSum = 0;

  for (let i = 2; i < num; i++) {
    for (let j = 2; j <= i; j++) {
      if (j === i) {
        primesSum += j;
      }
      if (i % j === 0) {
        break;
      }
    }
  }
  return primesSum;
}

/**
 * Test Suite
 */
describe("sumAllPrimes()", () => {
  it("adds all prime numbers up to input number", () => {
    // arrange
    const num = 10;

    // act
    const result = sumAllPrimes(num);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(17);
  });
});
