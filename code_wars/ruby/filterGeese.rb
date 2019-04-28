def goose_filter (birds)
  geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
  indexes = []
  birds = birds.each_with_index do |bird, index|
      for goose in geese do
          if bird == goose
              indexes << index
              break
           end
        end
   end
   birds.delete_if.with_index { |_, index| indexes.include? index }
  birds
end
goose_filter(["Pilgrim",
"Toulouse",
"Hook Bill",
"Hook Bill",
"Barbary",
"Pilgrim"]

)

# "Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"
