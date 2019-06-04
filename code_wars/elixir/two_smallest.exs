defmodule SmallSummer do
  def sum_two_smallest_numbers(input) do
   sort = Enum.sort(input)
   Enum.at(sort, 1) + Enum.at(sort, 0)
  end
end
Solution.solution([5, 8, 12, 19, 22])