function fibonacci(limit){
var fib = []; // Initialize array!
for(var i=0; i<=limit; i++)
{
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    if (i==0)
    	fib[i]=0;
    else if (i==1)
    	fib[i]=1;
    else
    fib[i] = fib[i-1]+fib[i-2] ;
    print(fib[i]);
}
}

print("Enter the number of  elements to limit fibonacci series:")
var limit=readline();
print ("The generatd series is:");
fibonacci(limit);