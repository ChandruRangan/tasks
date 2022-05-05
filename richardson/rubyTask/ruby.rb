require 'csv'
require 'date'
require 'json'
con=File.read(ARGV[1])
$data_con=JSON.parse(con)
class Person
  def initialize(name)
    @name = name
    
  end

  def print_full_name
    puts "#{@name}"
  end 
  end
  
class Overage < Person
  def initialize(name,age)
    super(name)
    @age = age
    
  end

  def over
    @k=File.open(ARGV[2],"w+")
    @k.write("Name"",""Age\n")
    if eval(@age+($data_con["format"]))
      puts "#{@name}|#{@age}"
      @a=File.open(ARGV[2],"a+")
      @a.write("#{@name},#{@age}\n")
    end
  end
  
end

class Dob < Person
  def initialize(name,date)
    super(name)
    @date = date
  end

  def dob
    @h=File.open(ARGV[2],"w+")
    @h.write("Name"",""Date\n")
     dateyear = Date.parse(@date)
    
     puts "#{@name}|#{dateyear.strftime('%b %d %Y')}"
     @b=File.open(ARGV[2],"a+")
     @b.write("#{@name},#{dateyear.strftime($data_con["format"])}\n")
  end
end 

class Voters < Person
  def initialize(name,age)
    super(name)
    @age = age
  end

  def voters

    @q=File.open(ARGV[2],"w+")
    @q.write("name"",""Age"",""Eligible\n")
    @c=File.open(ARGV[2],"a+")
    if eval(@age+($data_con["format"]))
      puts"#{@name}|#{@age}|T"
      @c.write("#{@name},#{@age},T \n")
    else
      puts"#{@name}|#{@age}|F"
      @c.write("#{@name},#{@age},F \n")
    end
  end
end

class Employee_name < Person
  def initialize(name,lname)
    super(name)
    @lname=lname
  end
  
  def full_name
    @w=File.open(ARGV[2],"w+")
    @w.write("name\n")
    @l=File.open(ARGV[2],"a+")
    @l.write("#{@name} #{@lname}\n")
  end
end


def agelimt
CSV.foreach(ARGV[0], headers: true) do |row|
  ov = Overage.new(
    row[0].split("|")[0],
    row[0].split("|")[1]
    
  )
  ov.over
end 
end


def date_and  
CSV.foreach(ARGV[0],headers:true) do |a|
  d= Dob.new(
    a[0].split("|")[0],
    a[0].split("|")[1]  
  )

  d.dob
end
end


def voting
CSV.foreach(ARGV[0],headers:true) do |i|
  voter= Voters.new(
    i[0].split("|")[0],
    i[0].split("|")[1]
  )
  voter.voters
end
end

def emp
  CSV.foreach(ARGV[0],headers:true) do |j|
    empl= Employee_name.new(
      j[0].split("|")[0],
      j[0].split("|")[1]
    )
    empl.full_name
  end
end



case $data_con["case"]
when "1"
  voting()
when "2"
  date_and()
when "3"
  agelimt()
when "4"
  emp()
end
