function UserInput(){
  print("Enter 3 numbers:");
  var a=readline();
  var b=readline();
  var c=readline();
  return [a,b,c];
}
function max3num(num1, num2, num3) {
    var max_so_far = num1;
    if (num2 > max_so_far) {
       max_so_far = num2;
    }
    if (num3 > max_so_far) {
       max_so_far = num3;
    }
    return max_so_far;
}
var input=UserInput();
var a= input[0];
var b= input[1];
var c= input[2];
biggest = max3num(a,b,c);
print("Biggest number among the 3 numbers is :",biggest);

