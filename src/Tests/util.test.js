// const functionsExp = require('../Utils');
import {trimmer,maxCharacter,notEmptyCheck,SpecialCh,hasNumber,hasOnlyLowerCase, hasEmoji} from '../Utils'

test('should return a string',()=>{
     const string =trimmer('                Hello world            ');
     expect(string).toBe('Hello world');
});

test('should return true(less than or equal to 40 ch.)',()=>{
      const check = maxCharacter('HelloHelloHelloHelloHelloHelloHello');
      expect(check).toBe(true);
})


test('should return false(more than 40 ch.)',()=>{
     const check = maxCharacter('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
     expect(check).toBe(false);
})




test('should fail the test',()=>{
      const test = notEmptyCheck('Hello');
      expect(test).toBe(true);
})

test('should return not empty',()=>{
      const test = notEmptyCheck('Hello');
      expect(test).toBe(undefined);
      
})

test('should return false,because it is empty',()=>{
   const test = notEmptyCheck(' ');
   expect(test).toBe(false);

})



test('should return true b/c it has a special character',()=>{
     const test = SpecialCh('@!#$%^&*Hello&%$#//');
     expect(test).toBe(true);
})


test('should return false bc it doesn\'t include a special character',()=>{
     const test = SpecialCh('Hello world');
     expect(test).toBe(false);
})


test('should return true because it has a number',()=>{

     const test = hasNumber('Helloworld87363');
     expect(test).toBe(false);


})


test('should return false because it doesnt have a number',()=>{

     const test = hasNumber('Helloworld');
     expect(test).toBe(true);


})


test('should return true b/c it has only lowercase',()=>{

  const test = hasOnlyLowerCase('hahaha');
  expect(test).toBe(true);


})



test('should return true b/c it has uppercase',()=>{

  const test = hasOnlyLowerCase('hahAha');
  expect(test).toBe(true);


})


test('should be able to add an element to the array',()=>{
     const arr = [];
     arr.push("Hello world");
     expect(arr.length!==0).toEqual(true)
});

test('should be able to remove an element from the array,true',()=>{
     const arr = [1,2];
     arr.pop();
     expect(arr.length===1).toBe(true);
})


test('should be able to update an element in the array',()=>{
     const arr = [1,2,3];
     arr[1]='Hello';
     expect(arr[1]==='Hello').toBe(true);
})

test('has Emoji',()=>{
     const test = hasEmoji('Hello😵')
     expect(test).toBe(true);
})
test('No Emoji',()=>{
     const test = hasEmoji('Hello')
     expect(test).toBe(false);
})




test('targeted an object inside of the array',()=>{
     const arr = [
          {id:123,name:'John Doe'},
          {id:899,name:'PaPaJohns'}

     ]

     expect(arr[1].id===899).toBe(true);

})



test('should be able to change an object id inside of the array of objects',()=>{
     const arr = [
          {id:123,name:'John Doe'},
          {id:899,name:'PaPaJohns'}

     ]
     arr[1].id=999;
     expect(arr[1].id===999).toBe(true);
})


test('should be able to remove a specific document from the collection',()=>{
     const arr = [
          {id:123,name:'John Doe'},
          {id:899,name:'PaPaJohns'}

     ]
     arr.splice(1,1)
     expect(arr.length===1).toBe(true);
})


test('should be able to add a property to a document inside of the collection',()=>{
     const arr = [
          {id:123,name:'John Doe'},
          {id:899,name:'PaPaJohns'}

     ]
     arr[1].todo='Code';
     expect(arr[1].todo==='Code').toBe(true);
})













