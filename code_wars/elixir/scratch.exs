defmodule Sample.Enum do
    def first(list, val \\nil)
    def first([head | _],_), do: head
    def first([], val), do: val
    def add(list, val \\ 0) do
        [val | list]
    end
    def map([], _), do: [ ]
    def map([hd|tl], f) do
        [f.(hd) | map(tl,f)]
    end
end  
defmodule Cond do
    def cond_test(day) do
        cond do 
            day == :Monday -> 'M'
            day == :Tuesday -> 'T '
        end
    end
    # pattern matching ex
    def case_test(date) do
        case date do
            {1,_,_} -> "Brand new month"
            {12,12,_} -> "Merry Xmas"
            {_,_,_} -> "Antother day"
        end
    end

end