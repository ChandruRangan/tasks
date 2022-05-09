require 'csv'
require 'date'
require 'json'

js=File.read(ARGV[0])
$config=JSON.parse(js)

class Namedat

    def initialize(name,date)
        @name=name
        @date = date
    end
    

    def dob
        dateconvert=File.new(ARGV[2],"w+")
        dateconvert.write("name"",""dob\n")
        date = Date.parse(@date)
        puts "#{@name}|#{date.strftime('%b %d %Y')}"
        dateconvert=File.open(ARGV[2],"a+")
        dateconvert.write("#{@name},#{date.strftime($config["format"])}\n")
    end 
end
    
class Nameage < Namedat     
  
    def initialize(name,age)
      @name=name
      @age=age
    end

    def age
        agelimit=File.new(ARGV[2],"w+")
        agelimit.write("name,age\n")
         if eval(($config["format"])+@age)
            puts "#{@name}|#{@age}"
            agelimit=File.open(ARGV[2],"a+")
            agelimit.write("#{@name},#{@age}\n")
        end     
    end 
end

class Namecom < Namedat

  def initialize(first_name,last_name)
    @first_name=first_name
    @last_name=last_name
  end
  

  def com
    commaconvert=File.new(ARGV[2],"w+")
    commaconvert.write("name\n")
    puts "#{@first_name}|#{@last_name}"
    commaconvert=File.open(ARGV[2],"a+")
    commaconvert.write("#{@first_name},#{@last_name}\n")
  end 
end
  

class Namevote < Namedat

  def initialize(name,age)
    @name=name
     @age=age
   end
 
     def vote
       voteligible=File.new(ARGV[2],"w+")
       voteligible.write("name"",""age"",""eligible_for_vote\n")
       if eval(($config["format"])+@age)
         puts "#{@name}|#{@age}|T"
         voteligible=File.open(ARGV[2],"a+")
         voteligible.write("#{@name},#{@age},T\n")
       else
         puts "#{@name}|#{@age}|F"
         voteligible=File.open(ARGV[2],"a+")
         voteligible.write("#{@name},#{@age},F\n")

       end
     end
 end 

  def date
      CSV.foreach(ARGV[1],headers:true) do |row|
         d = Namedat.new(
              row[0].split("|")[0],
              row[0].split("|")[1]  
            )
            
          d.dob
      end
    end

  def age
    CSV.foreach(ARGV[1],headers:true) do |row|    
       ab=Nameage.new(
         row[0].split("|")[0],
         row[0].split("|")[1],
       )
      ab.age
    end
  end

    
  def comma   
    CSV.foreach(ARGV[1],headers:true) do |row|
      m=Namecom.new(
      row[0].split("|")[0],
      row[0].split("|")[1]
      )
    m.com
    end
  end

  def votee
    CSV.foreach(ARGV[1],headers:true) do |row|
     g=Namevote.new(
      row[0].split("|")[0],
      row[0].split("|")[1],
      # v[0].split("|")[2]
     )
     g.vote
    end
  end

case $config["case"]

    when "1"
      date()
    when "2"
      age()
    when "3"
      comma()
    when "4"
      votee()
end