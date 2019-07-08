'use strict';

function collectSameElements(collectionA, collectionB) {
  //选出A集合中与B集合中子数组的元素相同的元素
  var repeatArray=[];
  for(let i=0;i<collectionA.length;i++){
    for(let j=0;j<collectionB.length;j++){
      for(let k=0;k<collectionB[j].length;k++)
      if(collectionA[i]==collectionB[j][k]){
        repeatArray.push(collectionB[j][k]);
      }
    }
   }
  return repeatArray;
}
