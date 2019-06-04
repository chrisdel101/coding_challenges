def find_next_square(sq)
#if mod zero it's int
   if Math.sqrt(sq) % 1 == 0
    newSq = sq + 1
    return newSq * newSq
   end
   return -1
end

find_next_square(625)