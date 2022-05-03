=begin
 def change(data)
    date=data.split("|").join('|')
    return date
end

puts change("karthick|2020-04-22")
=end

a=[1,2,5,3,5,6]
for i in a
    p i
end

p a.uniq
p a.include?(5)