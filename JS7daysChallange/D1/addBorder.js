function addBorder(array) {
    //  write code here.
   const newArray = array.map(e => `*${e}*`);
    newArray.unshift("*****")
    newArray.push("*****")
    return newArray
}



/**
* Test Suite 
*/
describe('addBorder()', () => {
    it('adds a border around entire application', () => {
        // arrange
        const strings = ['abc', 'ded'];
        
        // act
        const result = addBorder(strings);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(
                ["*****",
                "*abc*",
                "*ded*",
                "*****"]
        );
    })
});