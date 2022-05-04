require 'csv'
require 'date'
class Dataentry
    def initialize(name,date)
        @name=name
        @age=age
    end

    def printname
        puts "#{@name}|#{@age}"
      end
end
=begin
    filepath="student.csv"
   File.open(filepath) do |row|
   CSV.foreach(filepath,headers:true) do |row|
     data=Dataentry.new(row["name"],row["date"])
      data.printname

    end
end
=end
class Friend< Dataentry
     def initialize(name,age)
    super(name,age)
     end

     def Friend
        if @age.to_i<50
            puts"#{@name}|#{@age}"
        end
    end
    def voter
         if @age.to_i>18
            puts"#{@name}|#{@age}|T"
         else
            puts"#{@name}|#{@age}|F"
         end 
    end           
         CSV.foreach("people.csv",headers:true)do|row|
         data=Dataentry.new(row[0],row[1])
         data.voter
end
