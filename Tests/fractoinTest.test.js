const { sum } = require("../Scripts/fractionTest") ;
const { testingFrac } = require("../Scripts/fractionTest");
const { verifyFrac } = require("../Scripts/fractionTest");



//This is the main function, but it needs some functions in the js file to be commented to work properly.
//More info in js file.
test('The inputed number have to be a fraction', () =>
{

     expect(verifyFrac('34,0034')).toBe("It's a fraction!");

}); 

 
 
//Testing a more simple version of the main function.
 test('The inputed number have to be a fraction', () =>
{

     expect(testingFrac('34,0034')).toBe("It's a fraction!");

}); 

 
//Testing a basic function.
   test('Should output 2', () =>
   {
        expect(sum(1,1)).toBe(2);
   
}); 


