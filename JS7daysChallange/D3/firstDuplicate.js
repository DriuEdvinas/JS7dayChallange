function firstDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[Math.abs(nums[i]) - 1] < 0) return Math.abs(nums[i]);
    else nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1];
  }
  return -1;
}

/**
 * Test Suite
 */
describe("firstDuplicate()", () => {
  it("returns first duplicated value", () => {
    // arrange
    const nums = [2, 1, 3, 5, 3, 2];

    // act
    const result = firstDuplicate(nums);

    // log
    console.log("result 1: ", result);

    // assert
    expect(result).toBe(3);
  });

  it("returns -1 when no duplicated values", () => {
    // arrange
    const nums = [2, 1, 3, 5, 4, 6];

    // act
    const result = firstDuplicate(nums);

    // log
    console.log("result 2: ", result);

    // assert
    expect(result).toBe(-1);
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 981476f8eaec831671a5d971ddcc7fcc998eeef7
