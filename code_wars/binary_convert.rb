# Convert binary to integer
#
# def binary_array_to_number(arr)
#    x = arr.join
#    x.to_i(2)
# end
#
# Join make the array into a String
# to_i(2) makes the string into an integer but with a base class of two, which is binary
#
#
#
# Testing: [0, 0, 0, 1] ==> 1
# Testing: [0, 0, 1, 0] ==> 2
# Testing: [0, 1, 0, 1] ==> 5
# Testing: [1, 0, 0, 1] ==> 9
# Testing: [0, 0, 1, 0] ==> 2
# Testing: [0, 1, 1, 0] ==> 6
# Testing: [1, 1, 1, 1] ==> 15
# Testing: [1, 0, 1, 1] ==> 11


x = [0, 0, 0, 1]
y = x.join
