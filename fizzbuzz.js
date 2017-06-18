function fizzbuzz(limit){
for(i=0;i<limit;)print((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)
}
print("Enter the limiting number:");
var limit=readline();
fizzbuzz(limit);
