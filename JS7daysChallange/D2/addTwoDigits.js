//first solution
/* function addTwoDigits(num)  {
    let sNumber = num.toString().split(''),
    sum = 0;
    
   for(let i = 0; i < sNumber.length; i++){   
        sum += parseInt(sNumber[i]);
   };
    return sum;
} */
// second solution
function addTwoDigits(num) {
  return num
    .toString()
    .split("")
    .reduce((a, b) => parseInt(a) + parseInt(b));
}

/**
 * Test Suite
 */
describe("addTwoDigits()", () => {
  it("take a two digit number and return the sum of their numbers", () => {
    // arrange
    const num = 29;

    // act
    const result = addTwoDigits(num);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(11);
  });
});
