function isSquare(n){
if (n<=1)
	return true;
var currentno=2;
var currentsq=4;
while(currentsq<=n)
{
	
if (currentsq==n)
return true;
currentno+=1;
currentsq=currentno*currentno;
}
return false;
}
print("Enter a integer to check if it's a perfect square:");
n=readline();
result= isSquare(n);
if (result)
print("\nYes the number is a perfect square.");
else
print("\nNo the number is a not a perfect square.");
