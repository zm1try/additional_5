module.exports = function check(str, bracketsConfig) {
  
  var array = [],
      stack = [],
      i = 0,
      j = 0;
      l = 0;
  for(i; i < str.length; i++) {
    array.push(str.charAt(i));
  }
  //console.log(array);
  //console.log(bracketsConfig.length);

  for(i = 0; i < str.length; i++) {
    for(j = 0; j < bracketsConfig.length; j++) {
      //if (bracketsConfig[j][0] === bracketsConfig[j][1])
      if (array[i] === bracketsConfig[j][0]) {
        stack.push(array[i]);
        l++;
        if (stack[l-1] === array[i] && bracketsConfig[j][0] === bracketsConfig[j][1]) {
          stack.pop();
          
          l--;
          
        }
        //console.log(stack);
        break;
      }
      else
        if (array[i] === bracketsConfig[j][1]) {
            if ((l > 0) && (stack[l-1] === bracketsConfig[j][0])) {
              stack.pop();
              l--;
              //console.log('fail');
              //console.log(stack);
              //console.log(l);
              
              break;
            }
            else {
              return false;
              //console.log('fail');
            }
            
        }
        else continue;
    }
  }
  //console.log(l);
  if (l === 0)
  return true;
  else return false;
} 
