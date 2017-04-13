def format_money(amount)
  dollar = "$"
  amount = amount.to_s
  arr = []
  amount.each_char do |i|
  arr << i
  end

  # if length one and a period- whole number- add formatting => 1 = $1.00
  if arr.length === 1 && /\./.match(amount) != NilClass
    puts "#{dollar}#{amount}.00"
    # if length one and a period- whole number- add formatting => 1 = $1.00
  # if arr.length != 1 && /\./.match(amount) != NilClass
  #   puts "#{dollar}#{amount}.00"
    # if length one and a period- decimal- add buffer zeros => .1 = $0.10
  elsif /\./.match(amount) != NilClass
    puts "#{dollar}#{amount}0"
  end

end

format_money(39345)


# test for period
# dot = /\./.match("test")
# puts dot.class

# NilClass if no period
# MatchData if there is a period
