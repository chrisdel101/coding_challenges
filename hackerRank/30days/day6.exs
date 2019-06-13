defmodule Day6 do       
    def get_num_inputs do
        num = IO.gets("Enter num: ")
        num = num |> String.trim |> String.to_integer
        loop_inputs(1..num)
    end
    def loop_inputs(range) do
        Enum.map(range,  
        fn _ -> y = IO.gets("Enter str:")
        # to list
        y  = String.split("hello", ",", trim: true)
           IO.inspect(y)
         end)
    end
end

Day6.get_num_inputs