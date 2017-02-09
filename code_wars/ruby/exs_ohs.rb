def (str)
  xs = 0
  os = 0
  other = 0
  str.each_char do |char|
    char = char.downcase
    if char == "x"
        xs = xs + 1
    elsif char == "o"
        os = os + 1
    else char != "x"||"o"
        other = other + 1
      end
  end
  if xs == os
    return true
  elsif xs != os
    return false
  else (xs && os == 0) && other > 1
    return true
  end
end

puts xo("M")
