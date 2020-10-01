class DepthCalculator {
  calculateDepth(array, level=0){ 
    console.log(array)
    level++;
    let self=this;
    let arr=[];
    for(let item of array){
      if (item instanceof Array){
        arr.push(self.calculateDepth(item,level));
      }
    }
    let maxArrLevel=self.maxOfArr(arr);
    console.log(arr)
    console.log(level,maxArrLevel)
    level = (level>=maxArrLevel)?level:maxArrLevel;
    return level;
  }
  maxOfArr(array){
    let max=0;
    for(let item of array){
      if (item>max){
        max=item;
      }
    }
    return max
  }
};
let calc = new DepthCalculator;
// console.log(calc.calculateDepth([1, 2, 3, 4, 5, [1]]))
// console.log(calc.calculateDepth([1, 2, 3, [1], 4, 5, [1]]))
console.log(calc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]))
console.log(calc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]))

// it.optional('returns correct depth of nested arrays', () => {
//   assert.equal(calculateDepth([1, 2, 3, 4, 5, [1]]), 2);
//   assert.equal(calculateDepth([1, 2, 3, [1], 4, 5, [1]]), 2);
//   assert.equal(calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]), 3);
//   assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]), 4);
//   assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 5);
//   assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 15);
//   assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 25);
//   assert.equal(calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 31);
// });