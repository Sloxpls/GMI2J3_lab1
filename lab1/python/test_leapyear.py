# -*- coding: utf-8 -*-
'''
Unit test for leapyear.py
Student version
'''

import unittest
import leapyear

class AbcTest(unittest.TestCase):
    '''Your Abc unittests code goes here'''
    def test_string_input(self):
        year = "2000"
        self.assertRaises(leapyear.NotIntegerError, leapyear.to_leap_year, year)


class XyzTest(unittest.TestCase):
    '''Your Xyz unittests code goes here'''
    def test_known_years(self):
        known_years = [1504, 1996, 2000, 3004]
        for year in known_years:
            result = leapyear.to_leap_year(year)
            self.assertEqual(True, result)

    def test_invalid_years(self):
        known_years = [1001, 1302, 1903, 3005]
        for year in known_years:
            result = leapyear.to_leap_year(year)
            self.assertEqual(False, result)

    def test_century_years(self):
        known_years = [1700, 1800, 1900]
        for year in known_years:
            result = leapyear.to_leap_year(year)
            self.assertEqual(False, result)

    def test_negativ(self):
        year = -1
        self.assertRaises(leapyear.OutOfRangeError, leapyear.to_leap_year, year)

    def test_float(self):
        year = 1.0
        self.assertRaises(leapyear.NotIntegerError, leapyear.to_leap_year, year)









if __name__ == '__main__':
    unittest.main()
