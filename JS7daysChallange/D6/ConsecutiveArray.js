function makeArrayConsecutive(nums) {
  let count = 0;
  const max = nums[nums.length-1]
    const min = nums[0];
    for(let i = min; i < max; i++){
        if(!nums.includes(i))
            count++;
    }
  return count
}



/**
* Test Suite 
*/
describe('makeArrayConsecutive()', () => {
    it('returns total missing numbers between smallest and largest number', () => {
        // arrange
        const nums = [2,3,6,8];
        
        // act
        const result = makeArrayConsecutive(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    })
});