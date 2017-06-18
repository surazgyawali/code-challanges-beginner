print "Enter numbers to sort separated with a space Eg: 4 1 2 8"
s = raw_input()
numbers = map(int, s.split())

def quicksort(arr):
	if len(arr)<=1:
		return arr
	pivot=arr[len(arr)/2]
	left=[x for x in arr if x < pivot]
	middle=[x for x in arr if x==pivot]
	right=[x for x in arr if x>pivot]
	return quicksort(left)+middle+quicksort(right)

print 'Sorted list is:',quicksort(numbers)