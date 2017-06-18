function rev_str(str){
  var reverse="";
  var len = str.length;
  for(i=len-1;i>=0;i--)
  {
  reverse+=str[i];
}
return reverse;

}
print("Enter a string to reverse:")
var string=readline();
var reverse=rev_str(string);
print ("The reverse is:",reverse);
