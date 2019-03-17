class Array
   #  attr_accessor :arr
   #  def initialize(arr)
   #    @arr = arr
   # end
  def square(arr)
    return arr.map {|item| item**2 }
  end
  def cube(arr)
    return arr.map {|item| item**3 }
  end
  def average(arr)
    return sum/ (@arr.length)
  end
  def sum(arr)
    return @arr.reduce(:+)
  end
  def even()
      return
  end
  def odd()
  end

  # now fill in the rest
end


array = Array.new
print(array.square([1,2,3,3,4]))
# print(array.average())
