'use strict';

function collectSameElements(collectionA, objectB) {
 // 选出A集合中跟B对象中value属性中的元素相同的元素
 //const collectionA = ['a', 'e', 'h', 't', 'f', 'c', 'g', 'b', 'd'];
  //const collectionB = {value: ['a', 'd', 'e', 'f']};
 var repeatArray=[];
 for(let i=0;i<collectionA.length;i++){
   for(let j=0;j<objectB.value.length;j++){
     if(collectionA[i]==objectB.value[j]){
       repeatArray.push(objectB.value[j]);
     }
   }
  }
 return repeatArray;
}
