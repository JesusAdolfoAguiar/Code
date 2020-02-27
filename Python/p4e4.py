# Assignment 1
# def sqlite3db():
#
# 	import sqlite3
#
# 	conn = sqlite3.connect('emaildb.sqlite')
# 	cur = conn.cursor()
#
# 	cur.execute('DROP TABLE IF EXISTS Counts')
#
# 	cur.execute('CREATE TABLE Counts (org TEXT, count INTEGER)')
#
# 	fname = input('Enter file name: ')
# 	if (len(fname) < 1): fname = 'mbox-short.txt'
# 	fh = open(fname)
# 	for line in fh:
# 	    if not line.startswith('From: '): continue
# 	    pieces = line.split()
# 	    email = pieces[1]
# 	    cur.execute
# 	    row = cur.fetchone()
# 	    if row is None:
# 	        cur.execute('''INSERT INTO Counts (email, count)
# 	                VALUES (?, 1)''', (email,))
# 	    else:
# 	        cur.execute('UPDATE Counts SET count = count + 1 WHERE email = ?',
# 	                    (email,))
# 	conn.commit()
#
# 	# https://www.sqlite.org/lang_select.html
# 	sqlstr = 'SELECT email, count FROM Counts ORDER BY count DESC LIMIT 10'
#
# 	for row in cur.execute(sqlstr):
# 	    print(str(row[0]), row[1])
#
# 	cur.close()
#
# sqlite3db()


# Assignment 2
# Code: create db, create table (org, count) and count number emails per organization
# Note: week 2 assessment from the Coursera MOOC Using Databases with Python

# def sqlite3db():
#
# 	import sqlite3
#
# 	#Connecting to the file in which we want to store our db
# 	conn = sqlite3.connect('emaildb.sqlite')
# 	cur = conn.cursor()
#
# 	#Deleting any possible table that may affect this assignment
# 	cur.execute('DROP TABLE IF EXISTS Counts')
#
# 	#Creating the table we're going to use
# 	cur.execute('''
# 	CREATE TABLE Counts (org TEXT, count INTEGER)''')
#
# 	#Indicating the file from where we'll read the data
# 	fname = input('Enter file name: ')
# 	if (len(fname) < 1): fname = 'mbox.txt'
# 	fh = open(fname)
# 	for line in fh:
# 		if not line.startswith('From: '): continue
# 		pieces = line.split()
# 		email = pieces[1]
# 		parts = email.split('@')
# 		org = parts[-1]
#
#     	#Updating the table with the correspondent information
# 		cur.execute('SELECT count FROM Counts WHERE org = ? ', (org,))
# 		row = cur.fetchone()
# 		if row is None:
# 			cur.execute('''INSERT INTO Counts (org, count) VALUES (?, 1)''', (org,))
# 		else:
# 			cur.execute('UPDATE Counts SET count = count + 1 WHERE org = ?', (org,))
#
# 	# We commit the changes after they've finished because this speeds up the
# 	# execution and, since our operations are not critical, a loss wouldn't suppose
# 	# any problem
# 	conn.commit()
#
# 	# Getting the top 10 results and showing them
# 	# https://www.sqlite.org/lang_select.html
# 	sqlstr = 'SELECT org, count FROM Counts ORDER BY count DESC LIMIT 10'
#
# 	for row in cur.execute(sqlstr):
# 	    print(str(row[0]), row[1])
#
# 	cur.close()

# sqlite3db()

# Assignment 3
# Code: read an iTunes export file in XML and create a properly normalized db
# with these tables (track, album, artist, genre)
# Note: week 3 assessment from the Coursera MOOC Using Databases with Python

# def itunesdb():
#
#     import xml.etree.ElementTree as ET
#     import sqlite3
#
#     conn = sqlite3.connect('trackdb.sqlite')
#     cur = conn.cursor()
#
#     # Make some fresh tables using executescript()
#     cur.executescript('''
#     DROP TABLE IF EXISTS Artist;
#     DROP TABLE IF EXISTS Genre;
#     DROP TABLE IF EXISTS Album;
#     DROP TABLE IF EXISTS Track;
#
#     CREATE TABLE Artist (
#         id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
#         name    TEXT UNIQUE
#     );
#
#     CREATE TABLE Genre (
#     id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
#     name    TEXT UNIQUE
#     );
#
#     CREATE TABLE Album (
#         id  INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
#         artist_id  INTEGER,
#         title   TEXT UNIQUE
#     );
#
#     CREATE TABLE Track (
#         id  INTEGER NOT NULL PRIMARY KEY
#             AUTOINCREMENT UNIQUE,
#         title TEXT  UNIQUE,
#         album_id  INTEGER,
#         genre_id INTEGER
#     );
#     ''')
#
#
#     fname = input('Enter file name: ')
#     if ( len(fname) < 1 ) : fname = 'Library.xml'
#
#     # <key>Track ID</key><integer>369</integer>
#     # <key>Name</key><string>Another One Bites The Dust</string>
#     # <key>Artist</key><string>Queen</string>
#     # <key>Genre</key><string>X</string>
#     def lookup(d, key):
#         found = False
#         for child in d:
#             if found : return child.text
#             if child.tag == 'key' and child.text == key :
#                 found = True
#         return None
#
#     stuff = ET.parse(fname)
#     all = stuff.findall('dict/dict/dict')
#     print('Dict count:', len(all))
#     for entry in all:
#         if ( lookup(entry, 'Track ID') is None ) : continue
#
#         name = lookup(entry, 'Name')
#         artist = lookup(entry, 'Artist')
#         album = lookup(entry, 'Album')
#         genre = lookup(entry, 'Genre')
#
#         if name is None or artist is None or album is None or genre is None:
#             continue
#
#         print(name, artist, album, genre)
#
#         cur.execute('''INSERT OR IGNORE INTO Artist (name)
#             VALUES ( ? )''', ( artist, ) )
#         cur.execute('SELECT id FROM Artist WHERE name = ? ', (artist, ))
#         artist_id = cur.fetchone()[0]
#
#         cur.execute('''INSERT OR IGNORE INTO Album (title, artist_id)
#             VALUES ( ?, ? )''', ( album, artist_id ) )
#         cur.execute('SELECT id FROM Album WHERE title = ? ', (album, ))
#         album_id = cur.fetchone()[0]
#
#         cur.execute('''INSERT OR IGNORE INTO Genre (name)
#             VALUES ( ? )''', ( genre, ) )
#         cur.execute('SELECT id FROM Genre WHERE name = ? ', (genre, ))
#         genre_id = cur.fetchone()[0]
#
#         cur.execute('''INSERT OR REPLACE INTO Track
#             (title, album_id, genre_id)
#             VALUES ( ?, ?, ?)''',
#             ( name, album_id, genre_id) )
#
#         conn.commit()
#
# itunesdb()



# Assignment 4
# Code: read a roster data in JSON format, parse it, and produce a db
# containing User, Course, and Member tables, with role column stores in Member table
# Note: week 4 assessment from the Coursera MOOC Using Databases with Python

# User, Course, and Member tables

# def rosterdb():
#     import json
#     import sqlite3
#
#     conn = sqlite3.connect('rosterdb.sqlite')
#     cur = conn.cursor()
#
#     # Do some setup
#     cur.executescript('''
#     DROP TABLE IF EXISTS User;
#     DROP TABLE IF EXISTS Member;
#     DROP TABLE IF EXISTS Course;
#
#     CREATE TABLE User (
#         id     INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
#         name   TEXT UNIQUE
#     );
#
#     CREATE TABLE Course (
#         id     INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
#         title  TEXT UNIQUE
#     );
#
#     CREATE TABLE Member (
#         user_id     INTEGER,
#         course_id   INTEGER,
#         role        INTEGER,
#         PRIMARY KEY (user_id, course_id)
#     )
#     ''')
#
#     fname = input('Enter file name: ')
#     if len(fname) < 1:
#         fname = 'roster_data_sample.json'
#
#     # [
#     #   [ "Charley", "si110", 1 ],
#     #   [ "Mea", "si110", 0 ],
#
#     str_data = open(fname).read()
#     json_data = json.loads(str_data)
#
#     for entry in json_data:
#
#         name = entry[0];
#         title = entry[1];
#         role = entry[2];
#
#         print((name, title, role))
#
#         cur.execute('''INSERT OR IGNORE INTO User (name)
#             VALUES ( ? )''', ( name, ) )
#         cur.execute('SELECT id FROM User WHERE name = ? ', (name, ))
#         user_id = cur.fetchone()[0]
#
#         cur.execute('''INSERT OR IGNORE INTO Course (title)
#             VALUES ( ? )''', ( title, ) )
#         cur.execute('SELECT id FROM Course WHERE title = ? ', (title, ))
#         course_id = cur.fetchone()[0]
#
#         cur.execute('''INSERT OR REPLACE INTO Member
#             (user_id, course_id, role) VALUES ( ?, ?, ? )''',
#             ( user_id, course_id, role ) )
#         conn.commit()
#
# rosterdb()
