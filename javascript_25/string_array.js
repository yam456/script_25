function stringToArray(string){

  var arr=[];
  var index=0;
  var word='';
  for(let i=0;i<string.length;i++){
    if (string[i]===' '){
    arr[index]=word;
    index+=1;
    word='';
  }
  else{
    word+=string[i];
  }
    }
arr[index]=word;
  return arr;
}