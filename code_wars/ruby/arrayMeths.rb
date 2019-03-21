class Array
  def square()
    return map {|item| item**2 }
  end
  def cube(arr)
    return map {|item| item**3 }
  end
  def average(arr)
    return sum/ self.size
  end
  def sum(arr)
    return reduce(:+)
  end
  def even()
      return select(&:even?)
  end
  def odd()
      return select(&:even?)
  end

  # now fill in the rest
end


array = Array.new([1,2,3,3,4]).square()
print(array)
# print(array.average([1,2,3,3,4]))
# print(array.average())
