require 'csv'

class Person
  def initialize(name, age)
    @name = name
    @age = age
  end

  def print_full_name
    if @age.to_i<50
    puts "#{@name} | #{@age}"
    end
  end
  def print_voters
    if @age.to_i>18
        puts "#{@name}|#{@age}|T"
    else
        puts "#{@name}|#{@age}|F"
    end
end
end



CSV.foreach("test.csv", headers: true) do |row|
  person = Person.new(
    row[0],
    row[1],
  )

  #person.print_full_name
  person.print_voters
end