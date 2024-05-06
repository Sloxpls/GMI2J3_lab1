# -*- coding: utf-8 -*-
'''
There is a leap year every year whose number is perfectly divisible by four - 
except for years which are both divisible by 100 and not divisible by 400. 
The second part of the rule effects century years. 
For example; the century years 1600 and 2000 are leap years, 
but the century years 1700, 1800, and 1900 are not.
'''

class OutOfRangeError(ValueError):
    pass
class NotIntegerError(ValueError):
    pass

def to_leap_year(year):
    '''Python program to check if the input year is a leap year or not'''


    if type(year) is not int: #cheacks if input is not int
        raise NotIntegerError("Funktion only accepts integers")

    if year < 0: #cheaks if input is negativ
        raise OutOfRangeError("Funktion only accepts positive integers")

    is_leap = False

    if year % 4 == 0 and year % 100 != 0 or year % 400 == 0:
        is_leap = True


    if is_leap:
        print(f"{year} is a leap year")
    else:
        print(f"{year} is not a leap year")

    return is_leap


if __name__ == '__main__':
    to_leap_year(2021)
