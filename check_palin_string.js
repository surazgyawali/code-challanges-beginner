function check_palin(str){
  var regex=/[^a-zA-z0-9]/g;    //or var regex=/[\W]/g;
  str=str.toLowerCase().replace(regex,"")
  var len=Math.floor(str.length/2);
  for (var i=0;i<len;i++)
    if(str[i]!==str[str.length-1-i])
      return false;
    return true;
}
var str=readline(print("Enter a string to check if it's palindrome:"));
if (check_palin(str))
print("The string is a Palindrome.");
else
  print("The string is not a Palindrome.");
