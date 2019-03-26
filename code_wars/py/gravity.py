#!/usr/bin/env python
# -*- coding: utf-8 -*-
def solution(values, units) :
    def convertToKG(value, unit):
        print('UNIT', unit)
        if unit ==  "g":
            return value / 1000.0
        elif unit == "mg":
            return value / 1000000.0
        elif unit == "μg":
            return value / 1000000000.0
        elif unit == "lb":
            return value / 2.2046226218
        elif unit == "kg":
            return value;
        else:
            return 0
    def convertToM(value, unit):
        print('UNIT', unit)
        if unit ==  "cm":
            return value / 100.0
        elif unit == "mm":
            return value / 1000.0
        elif unit == "μm":
            print('here')
            return value / 1000000.0
        elif unit == "ft":
            return value / 3.280839895
        elif unit == "m":
            return value;
        else:
            return 0

    obj1W = convertToKG(values[0], units[0])
    print(obj1W,"kg")
    obj2W = convertToKG(values[1], units[1])
    print(obj2W, "kg")
    distance = convertToM(values[2], units[2])
    print(distance , "m")

    F = 0.0000000000667 * (obj1W * obj2W) / pow(distance, 2)
    F = float("%0.18f"%F)
    try:
        print(F)
        return F
    except ZeroError(e):
        print('ERROR', e)


solution([200001.0, 200001.0, 0.3], ['lb', 'kg', 'cm'])

#
# [100001.0, 1.0, 0.3]
# U ['lb', 'lb', 'μm']
#
# V [1.0, 200001.0, 0.3]
# U ['lb', 'mg', 'μm']
#
# V [100001.0, 100001.0, 0.3]
# U ['kg', 'lb', 'mm']
#
# V [200001.0, 200001.0, 0.3]
# U ['kg', 'lb', 'm']
#
#
#
# V [100001.0, 200001.0, 0.3]
# U ['lb', 'lb', 'ft']
#
# V [200001.0, 1.0, 10000001.0]
# U ['μg', 'lb', 'm']
