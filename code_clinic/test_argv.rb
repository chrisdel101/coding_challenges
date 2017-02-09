base_file = File.open("LPO_weatherdata/Environmental_Data_Deep_Moor_" + date + ".txt")

date = date

base_file.each do |line|
  arr = []
  arr << line
  puts counter += 1
  arr
end

base_file.close
