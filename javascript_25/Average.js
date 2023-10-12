function getAverage(marks){
    
    var count=marks.length;
    let sum=0;
    for(let i=0;i<count;i++){
      sum+=marks[i];
    }
    return Math.floor(sum/count);
  }