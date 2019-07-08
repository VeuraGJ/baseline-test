'use strict';

function collectSameElements(collectionA, objectB) {
  //选出A集合中元素的key属性，跟B对象中value属性中的元素相同的元素
  //const collectionA = [
  //  {key: 'a'}, {key: 'e'}, {key: 'h'}, {key: 't'}, {key: 'f'}, {key: 'c'}, {key: 'g'}, {key: 'b'}, {key: 'd'}
  // ];
  // const collectionB = {value: ['a', 'd', 'e', 'f']};
  var repeatArray=[];
 for(let i=0;i<collectionA.length;i++){
   for(let j=0;j<objectB.value.length;j++){
     if(collectionA[i].key==objectB.value[j]){
       repeatArray.push(objectB.value[j]);
     }
   }
  }
 return repeatArray;
}
