def remove_chars(s)
    len = s.length-1
    s.slice!(len)
    s.slice!(0)
    puts s
end

remove_chars('string')
