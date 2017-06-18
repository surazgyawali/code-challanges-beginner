function gcd(a, b) {
    if ( !b) {
        return a;
    }

    return gcd(b, a % b); //same as passing gcd(num2,remainder)
}
print("Entr two numbers:")
var num1=readline();var num2=readline();
out = gcd(num1,num2);
print("The Great common divisior is:")
print(out);