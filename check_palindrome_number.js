function find_rev(n){
	
	var rev=0;
	while(n!=0){
	rev = (rev*10 )+( n%10);
	n=Math.floor(n/10);
	}
	return rev;
}
/*Reverse = function(number) {
 var reversed = 0;

 while (number != 0) {
  reversed *= 10;
  reversed += number % 10;
  number -= number % 10;
  number /= 10;
 }

 return reversed;
}*/
var number= readline(print("Enter a number:"));
var reverse=find_rev(number);
print ("Reverse of the number",number,"is:",reverse);
if (reverse==number)
print("This number",number,"is a palindrome.");
else
print("This number",number,"is not a palindrome.");