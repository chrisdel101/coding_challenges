defmodule Solution do

#Enter your code here. Read input from STDIN. Print output to STDOUT
        def print_multiples(n, acc) when acc === 10, do: nil
        def print_multiples(n,i) do
            # puts('')
            # for x <- 0..i, do: x * n
            for x <- 0..i do
                IO.puts(x * n)
            end
            print_multiples(n, acc * i, i+1)
        end
       
        
end
{n, _} = IO.gets("enter n: ") |> Integer.parse
{i, _} = IO.gets("enter i: ") |> Integer.parse

Solution.print_multiples(n,i)
