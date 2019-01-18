# Exercise 7.1. Write a program to read through a file and print the
# contents of thefile (line by line) all in upper case.
# def readwords():
#     fname = input("Enter file name: ")
#     try:
#         fhand = open(fname)
#     except:
#         print('File cannot be opened:', fname)
#         exit()
#
#     for line in fhand:
#         words = line.rstrip()
#         print(words.upper())
#
# readwords()
#
# Exercise 7.2. Write a program to prompt for a file name, and
# #then read through the file and look for lines of the form
#
# X-DSPAM-Confidence: 0.8475
#
# When you encounter a line that starts with “X-DSPAM-Confidence:” pull apart
# the line to extract the floating-point number on the line. Count these lines and
# then compute the total of the spam confidence values from these lines. When you
# reach the end of the file, print out the average spam confidence
#Modify the program that prompts the user for the file
# name so that it prints a funny message when the user types in the exact file name
# “na na boo boo”.
# '''

# def findnumbers():
#     fname = input("Enter file name: ")
#
#     if fname == "na na boo boo":
#         print("NA NA BOO BOO TO YOU - You have been punk'd!")
#         exit()
#
#     try:
#         fhand = open(fname, 'r')
#     except:
#         print('File cannot be opened:', fname)
#         exit()
#
#     total = 0
#     floats = []
#     for line in fhand:
#         if line.strip().startswith('X-DSPAM-Confidence:'):
#             flt = float(line.split(':')[1].strip())
#             floats.append(flt)
#             total += flt
#
#     average = total/len(floats)
#
#     print('Average spam confidence:', average)
#
# findnumbers()

# Exercise 8.1 Write a function called chop that takes a list and modifies it, remov-
# ing the first and last elements, and returns None.
# Then write a function called middle that takes a list and returns a new list that
# contains all but the first and last elements.
# lst = ['a','b','c']
# def chop(lst):
#     del lst[0]
#     del lst[-1]
#     print(lst)
# chop(lst)

# lst = ['a','b','c']
# def middle(lst):
#     rest = lst[1:]
#     mddl = rest[:-1]
#     print(mddl)
# middle(lst)

# Exercise 8.2 Figure out which line of the above program is still not properly
# guarded. See if you can construct a text file which causes the program to
# fail and then modify the program so that the line is properly guarded and
# test it to make sure it handles your new text file.

# Exercise 8.3 Rewrite the guardian code in the above example without two
# if statements. Instead, use a compound logical expression using the and
# logical operator with a single if statement.

# We can cause an IndexError by passing this program a line which
# starts with "From" but containing nothing else. This passes the first test, the
# length of the line is > 0. The second test checks if the line starts with
# "From" and the program proceeds to try to print words[2] which does not exist.
# We can guard against this case by adding an "or" test to check that the line
# contains a 3rd item.
#
#def debug():
#   fhand = open('mbox-short.txt')
#   count = 0
#   for line in fhand:
#       words = line.split()
#       # print 'Debug:', words
#       if len(words) == 0 or len(words) < 3 and words[0] != 'From': continue
#       print words[2]


# Exercise 8.4 Download a copy of the file from www.py4inf.com/code/romeo.
# txt
# Write a program to open the file romeo.txt and read it line by line. For each line,
# split the line into a list of words using the split function.
# For each word, check to see if the word is already in a list. If the word is not in the
# list, add it to the list.
# When the program completes, sort and print the resulting words in alphabetical
# order.
# Enter file: romeo.txt
# ['Arise', 'But', 'It', 'Juliet', 'Who', 'already',
# 'and', 'breaks', 'east', 'envious', 'fair', 'grief',
# 'is', 'kill', 'light', 'moon', 'pale', 'sick', 'soft',
# 'sun', 'the', 'through', 'what', 'window',
# 'with', 'yonder']


# def romeo():
#     fname = input("Enter file name: ")
#
#     try:
#         fhand = open(fname, 'r')
#     except:
#         print('File cannot be opened:', fname)
#         exit()
#
#     words = []
#     for line in fhand:
#         makewords = line.split()
#
#         for word in makewords:
#             if word in words: continue
#
#             else:
#                 words.append(word)
#
#     words.sort()
#     print(words)
#
# romeo()

# Exercise 8.5 Write a program to read through the mail box data and when you
# find line that starts with “From”, you will split the line into words using the split
# function. We are interested in who sent the message, which is the second word on
# the From line.

# From stephen.marquard@uct.ac.za Sat Jan 5 09:14:16 2008


# You will parse the From line and print out the second word for each From line,
# then you will also count the number of From (not From:) lines and print out a
# count at the end.

# def mail():
#     fname = input("Enter file name: ")
#
#     try:
#         fhand = open(fname, 'r')
#     except:
#         print('File cannot be opened:', fname)
#         exit()
#
#     count = 0
#     for line in fhand:
#         delimiter = ' '
#         makewords = line.split(delimiter)
#
#         if len(makewords) == 0 or len(makewords) < 3 :continue
#
#         if makewords[0] != 'From' : continue
#
#         print(makewords[1])
#
#         count += 1
#
#     print('There were', count, 'lines in the file with From as the first word')
#
# mail()

# Exercise 8.6 Rewrite the program that prompts the user for a list of numbers and
# prints out the maximum and minimum of the numbers at the end when the user
# enters “done”. Write the program to store the numbers the user enters in a list
# and use the max() and min() functions to compute the maximum and minimum
# numbers after the loop completes.

# def numbers():
#
#     numberlst = []
#     while True:
#         userinput = input("Enter a number: ")
#
#         if userinput == "done":
#             break
#         try:
#             number = float(userinput)
#         except:
#             print("Invalid, please try again")
#
#         numberlst.append(userinput)
#
#     print('Maximum:',max(numberlst))
#     print('Manimum:',min(numberlst))
#
# numbers()

# Exercise 9.1 Write a program that reads the words in words.txt and stores them
# as keys in a dictionary. It doesn’t matter what the values are. Then you can use
# the in operator as a fast way to check whether a string is in the dictionary.

# def dictcounter():
#
#     fname = input("Enter file name: ")
#     dictionary = dict()
#
#     try:
#         fhand = open(fname, 'r')
#     except:
#         print('File cannot be opened:', fname)
#         exit()
#
#     for line in fhand:
#         words = line.split()
#         for word in words:
#             dictionary[word] = word
#
#         return word_dict
#
# dictcounter

# Exercise 9.2 Write a program that categorizes each mail message by which day
# of the week the commit was done. To do this look for lines that start with “From”,
# then look for the third word and keep a running count of each of the days of the
# week. At the end of the program print out the contents of your dictionary (order
# does not matter).

# def mailcat():
#
#     fname = input("Enter file name: ")
#
#     try:
#         fhand = open(fname, 'r')
#     except:
#         print('File cannot be opened:', fname)
#         exit()
#
#     dictionary = dict()
#
#     for line in fhand:
#         words = line.split()
#         if len(words) == 0 or len(words) < 3 :continue
#         if words[0] != 'From' : continue
#         date = words[2]
#         if date not in dictionary:
#             dictionary[date] = 1
#         else:
#             dictionary[date] += 1
#
#     print(dictionary)
#
# mailcat()

#mbox-short.txt


# Exercise 9.3 Write a program to read through a mail log, build a histogram using
# a dictionary to count how many messages have come from each email address,
# and print the dictionary.
# Enter file name: mbox-short.txt
# {'gopal.ramasammycook@gmail.com': 1, 'louis@media.berkeley.edu': 3,
# 'cwen@iupui.edu': 5, 'antranig@caret.cam.ac.uk': 1,
# 'rjlowe@iupui.edu': 2, 'gsilver@umich.edu': 3,
# 'david.horwitz@uct.ac.za': 4, 'wagnermr@iupui.edu': 1,
# 'zqian@umich.edu': 4, 'stephen.marquard@uct.ac.za': 2,
# 'ray@media.berkeley.edu': 1}


# def mailsource():
#
#     fname = input("Enter file name: ")
#
#     try:
#         fhand = open(fname, 'r')
#     except:
#         print('File cannot be opened:', fname)
#         exit()
#
#     dictionary = dict()
#
#     for line in fhand:
#         words = line.split()
#         if len(words) == 0 or len(words) < 3 :continue
#         if words[0] != 'From' : continue
#         date = words[1]
#         if date not in dictionary:
#             dictionary[date] = 1
#         else:
#             dictionary[date] += 1
#
#     print(dictionary)
#
# mailsource()

# Exercise 9.4 Add code to the above program to figure out who has the most mes-
# sages in the file.
# After all the data has been read and the dictionary has been created, look through
# the dictionary using a maximum loop (see Section 5.7.2) to find who has the most
# messages and print how many messages the person has.
# Enter a file name: mbox-short.txt
# cwen@iupui.edu 5
# Enter a file name: mbox.txt
# zqian@umich.edu 19

# def mailsource():
#
#     fname = input("Enter file name: ")
#
#     try:
#         fhand = open(fname, 'r')
#     except:
#         print('File cannot be opened:', fname)
#         exit()
#
#     dictionary = dict()
#
#     for line in fhand:
#         words = line.split()
#         if len(words) == 0 or len(words) < 3 :continue
#         if words[0] != 'From' : continue
#         date = words[1]
#         if date not in dictionary:
#             dictionary[date] = 1
#         else:
#             dictionary[date] += 1
#
#     maximum = None
#     for mail in dictionary:
#         if maximum is None or dictionary[mail] > maximum:
#             maximum = dictionary[mail]
#             sender = mail
#     print(sender, maximum)
#
# mailsource()

# Exercise 9.5 This program records the domain name (instead of the address)
# where the message was sent from instead of who the mail came from (i.e., the
# whole email address). At the end of the program, print out the contents of your
# dictionary.
# python schoolcount.py
# Enter a file name: mbox-short.txt s
# {'media.berkeley.edu': 4, 'uct.ac.za': 6, 'umich.edu': 7,
# 'gmail.com': 1, 'caret.cam.ac.uk': 1, 'iupui.edu': 8}

# def domain():
#
#     fname = input("Enter file name: ")
#
#     try:
#         fhand = open(fname, 'r')
#     except:
#         print('File cannot be opened:', fname)
#         exit()
#
#     dictionary = dict()
#
#     for line in fhand:
#         words = line.split()
#         if len(words) == 0 or len(words) < 3 :continue
#         if words[0] != 'From' : continue
#
#         mail = words[1]
#         address = mail.split("@")
#         mailaddress = address[0]
#
#         if mailaddress not in dictionary:
#             dictionary[mailaddress] = 1
#         else:
#             dictionary[mailaddress] += 1
#
#     print(dictionary)
#
# domain()

# Exercise 10.1 Revise a previous program as follows: Read and parse the “From”
# lines and pull out the addresses from the line. Count the number of messages from
# each person using a dictionary.
# After all the data has been read, print the person with the most commits by creating
# a list of (count, email) tuples from the dictionary. Then sort the list in reverse order
# and print out the person who has the most commits.
# Sample Line:
# From stephen.marquard@uct.ac.za Sat Jan
# 5 09:14:16 2008
# Enter a file name: mbox-short.txt
# cwen@iupui.edu 5
# Enter a file name: mbox.txt
# zqian@umich.edu 195


# def mailsource():
#
#     fname = input("Enter file name: ")
#
#     try:
#         fhand = open(fname, 'r')
#     except:
#         print('File cannot be opened:', fname)
#         exit()
#
#     dictionary = dict()
#
#     for line in fhand:
#         words = line.split()
#         if len(words) == 0 or len(words) < 3 :continue
#         if words[0] != 'From' : continue
#         date = words[1]
#         if date not in dictionary:
#             dictionary[date] = 1
#         else:
#             dictionary[date] += 1
#
#     maximum = None
#     for mail in dictionary:
#         if maximum is None or dictionary[mail] > maximum:
#             maximum = dictionary[mail]
#             sender = mail
#     print(sender, maximum)
#
# mailsource()

# Exercise 10.2 This program counts the distribution of the hour of the day for
# each of the messages. You can pull the hour from the “From” line by finding the
# time string and then splitting that string into parts using the colon character. Once
# you have accumulated the counts for each hour, print out the counts, one per line,
# sorted by hour as shown below


# Sample Execution:
# python timeofday.py
# Enter a file name: mbox-short.txt
# 04 3
# 06 1
# 07 1
# 09 2
# 10 3
# 11 6
# 14 1
# 15 2
# 16 4
# 17 2
# 18 1
# 19 1

# From stephen.marquard@uct.ac.za Sat Jan 5 09:14:16 2008

# def hour():
#
#     fname = input("Enter file name: ")
#
#     try:
#         fhand = open(fname, 'r')
#     except:
#         print('File cannot be opened:', fname)
#         exit()
#
#     dictionary = dict()
#
#     for line in fhand:
#         words = line.split()
#         if len(words) == 0 or len(words) < 3 :continue
#         if words[0] != 'From' : continue
#
#         time = words[5]
#         hour = time.split(":")
#         timehour = hour[0]
#
#         if timehour not in dictionary:
#             dictionary[timehour] = 1
#         else:
#             dictionary[timehour] += 1
#
#     lst = list()
#     for key, val in dictionary.items():
#         lst.append( (key, val) )
#     lst.sort()
#     for key, val in lst:
#         print(key, val)
#
# hour()
#
# Exercise 10.3 Write a program that reads a file and prints the letters in decreasing
# order of frequency. Your program should convert all the input to lower case and
# only count the letters a-z. Your program should not count spaces, digits, punctua-
# tion, or anything other than the letters a-z. Find text samples from several different
# languages and see how letter frequency varies between languages. Compare your
# results with the tables at wikipedia.org/wiki/Letter_frequencies.

# def hour():
#
#     import string
#
#     fname = input("Enter file name: ")
#
#     try:
#         fhand = open(fname, 'r')
#     except:
#         print('File cannot be opened:', fname)
#         exit()
#
#
#     dictionary = dict()
#
#     for line in fhand:
#
#         line = line.translate(None, string.punctuation)
#         line = line.lower()
#         words = line.split()
#
#         for word in words:
#
#             word = ''.join(i for i in word if not i.isdigit())
#
#             for i in word:
#
#                 if ir not in dictionary:
#                     dictionary[i] = 1
#                 else:
#                     dictionary[i] += 1
#
#     lst = list()
#     for key, val in dictionary.items():
#         lst.append( (key, val) )
#     lst.sort()
#     for key, val in lst:
#         print(key, val)
#
# hour()
