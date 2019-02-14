## Assignment 2.2
# Write a program that uses raw_input to prompt a user for their name and then
#welcomes them. Note that raw_input will pop up a dialog box

# The code below almost works

name = input("Enter your name")
print "Hello %s" % name

## Assignment 2.3
# Write a program to prompt the user for hours and rate per hour using raw_input
#to compute gross pay. Use 35 hours and a rate of 2.75 per hour to test the
#program (the pay should be 96.25).

# This first line is provided for you

hrs = float(input("Enter Hours:"))
rate = float(input("Enter Rate:"))
print hrs * rate

## Assignment 3.1

# 3.1 Write a program to prompt the user for hours and rate per hour using
#raw_input to compute gross pay.
# Pay the hourly rate for the hours up to 40 and 1.5 times the hourly rate
#for all hours worked above 40 hours.
# Use 45 hours and a rate of 10.50 per hour to test the program
#(the pay should be 498.75)

hrs = float(input("Enter Hours:"))
rate = float(input("Enter Rate:"))

if hrs <= 40:
    pay = hrs * rate
    print pay
else:
    pay = 40 * rate + (rate * 1.5 * (hrs - 40))
    print pay

## Assignemt 3.3
# Write a program to prompt for a score between 0.0 and 1.0. If the score
#is out of range, print an error. If the score is between 0.0 and 1.0, print a
# grade using the following table:
# Score Grade
# >= 0.9 A
# >= 0.8 B
# >= 0.7 C
# >= 0.6 D
# < 0.6 F
# If the user enters a value out of range, print a suitable error message and
#exit. For the test, enter a score of 0.85.

inp = input("Enter Score: ")

try:
    score = float(inp)
except:
    print "Error! Enter numerical value"
    quit()

if score < 0 and score > 10:
    print "Error! The value entered is out of range"
    quit()
elif score >= 0.9:
    print 'A'
elif score >= 0.8:
    print 'B'
elif score >= 0.7:
    print 'C'
elif score >= 0.6:
    print 'D'
else:
    print 'F'

## Assignment 4.6

# Write a program to prompt the user for hours and rate per hour using
#raw_input to compute gross pay.
# Award time-and-a-half for the hourly rate for all hours worked above 40 hours.
# Put the logic to do the computation of time-and-a-half in a function called
#computepay() and use the function to do the computation.
# The function should return a value. Use 45 hours and a rate of 10.50 per hour
# to test the program (the pay should be 498.75)

def computepay(h,r):
    if h <= 40:
        return h * r
    else:
        return 40 * r + (r * 1.5 * (h - 40))

h = float(input("Enter Hours:"))
r = float(input("Enter Rate:"))
p = computepay(h,r)
print p


## Assignment 5.2

# Write a program that repeatedly prompts a user for integer numbers until
#the user enters 'done'.
# Once 'done' is entered, print out the largest and smallest of the numbers.
# If the user enters anything other than a valid number catch it with a
#try/except and put out an appropriate
# message and ignore the number

largest = None
smallest = None
while True:
    num = input("Enter a number: ")

    # Handle extreme cases
    if num == "done" : break
    #print num
    try:
        intg = int(num)
    except:
        print "Invalid input"
        continue

    # Do the work
    if largest is None or intg > largest:
        largest = intg
    if smallest is None or intg < smallest:
        smallest = intg

print "Maximum is", largest
print "Minimum is", smallest
