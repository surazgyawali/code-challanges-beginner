print "Enter numbers to print even squares of them separated with a space Eg: 4 1 2 8"
s = raw_input()
numbers = map(int, s.split())
evensq = {x:x**2 for x in numbers if x%2==0}
print "This is the list of even squares of given numbers: ",evensq