#Exercise 11.1 Write a simple program to simulate the operation of the grep
# command on Unix. Ask the user to enter a regular expression and count
# the number of lines that matched the regular expression.

# def grep():
# 	import re
# 	fname = input("Enter file name: ")
# 	rename = input("Enter regular expresion: ")
#
# 	try:
# 		fhand = open(fname)
# 	except:
# 		print('File cannot be opened:', fname)
# 		exit()
#
# 	count = 0
#
# 	for line in fhand:
# 		line = line.rstrip()
# 		x = re.findall(rename, line)
#
# 		if len(x) > 0:
# 			count = count + 1
#
# 	print(fname  + " had " + str(count) + " lines that matched " + rename)
#
# grep()

# Exercise 11.2 Write a program to look for lines of the form
# New Revision: 39772
# and extract the number from each of the lines using a regular expression
# and thefindall() method. Compute the average of the numbers and print out
# the average.

def grep():
	import re
	fname = input("Enter file name: ")

	try:
		fhand = open(fname)
	except:
		print('File cannot be opened:', fname)
		exit()

	count = 0

	for line in fhand:
		line = line.rstrip()
		x = re.findall('New Revision: 39772', line)

		if len(x) > 0:
			count = count + 1

	print(fname  + " had " + str(count) + " lines that matched " + rename)

grep()
