function isDivisible(num, x, y) {
    var a=num/x;
    var b=num/y;
    if(a%1===0 && b%1===0){
      return true;
    }
    return false;
  }