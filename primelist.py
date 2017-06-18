def prime_list(end):
    #end=raw_input("Enter the Ending limit greater than 1:")
    if (end >1):
    	for x in range(1,sqrt(end)):
    		for i in range(1,sqrt(end)):
        			if (x%i!=0):
            				print(x)
    else:
    	print("Ending limit is not valid")