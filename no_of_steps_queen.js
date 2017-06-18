//Find the number of steps for queen in a chess board to reach from position(x1,y1) to (x2,y2).

var x1=readline(print("Enter X and Y co-ordinate of intial position(value between 0-7):\nx:"));
var y1=readline(print("y:"));
var x2=readline(print("Enter X and Y co-ordinate of destination(value between0-7):\nx:"));
var y2=readline(print("y:"));

function moves(x1,y1,x2,y2){
var moves;
var steps;
var diffx=Math.abs(x2-x1);
var diffy=Math.abs(y2-y1);
if (diffx==diffy)
	{
		moves= 1;
		steps=diffx;
	
	}
else if (x2==x1 || y2==y1)
	{
		moves= 1;
		if(x2==x1)
		steps=diffy;
		else
		steps=diffx;
	}
else 	{
	moves=2;
	steps=diffx+diffy;
	}
print ("Moves:",moves,"Steps:",steps);
}
moves(x1,y2,x2,y1);