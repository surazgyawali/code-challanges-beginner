function fact_exp(n){

	var factorial = function fac(n){return n<2?1:n*fac(n-1);};
	return factorial(n);
}

function fact_recurcive(n){
	if((n===0)||(n===1))
		
		return 1;
	else
		return(n*fact_recurcive(n-1));
}
print("Select the method to calculate factorial:\n 1.Expression function\n 2.Normal method.");
var method = readline();
print("Enter the number to whose factorial is to be found.");
var n=readline();
if (method==1)
	var factorial=fact_exp(n);
else
	factorial=fact_recurcive(n);
print("Factorial of",n,"is:",factorial);