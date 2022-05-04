require 'csv'
require 'date'
class Person
  def initialize(name)
    @name = name
    
  end

  def print_full_name
    #if @age.to_i<50
    puts "#{@name} | #{@age}"
    end
  end
  
=begin 
def print_voters
    if @age.to_i>18
        puts "#{@name}|#{@age}|T"
    else
        puts "#{@name}|#{@age}|F"
    end
end 
=end 

=begin
def dob
    date= Date.parse(@date)
    p "#{@name}|#{date.strftime('%b %d, %Y')}"
  end
end
=end


class Overage < Person
  def initialize(name)
    super(name)
    
  end

  def over
    if @age.to_i<50
      puts "#{@name}|#{@age}"
    end
  end
  
end

class Dob < Person
  def initialize(name,date)
    super(name)
    @date = date
  end

  def dob
    dateyear = Date.parse(@date)
    puts "#{@name}|#{dateyear.strftime('%b %d %Y')}"
  end
end 


CSV.foreach("test.csv", headers: true) do |row|
  ov = Overage.new(
    row[0].split("|")[0],
    row[0].split("|")[1]
    
  )

  
CSV.foreach("dob.csv",headers:true) do |a|
  d= Dob.new(
    a[0].split("|")[0],
    a[0].split("|")[1]  
  )
  

  #ov.over
  d.dob

end
end