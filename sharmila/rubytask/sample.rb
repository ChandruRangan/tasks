
require'csv'
require'date'
require'json'
con=File.read(ARGV[1])
$data_config=JSON.parse(con)
class Csv_data
    def initialize(name)
        @name=name
       puts"#{@name}"
    end
    def csv_data
      puts"#{@name}"
    end
end
class Age_50 < Csv_data
    def initialize(name,age)
        super(name)
        @age=age
    end
    def csv_data
        @j=File.open(ARGV[2],"w+")
        @j.write("name"",""age \n")
        @a=File.open(ARGV[2],"a+")
        if eval(@age+($data_config["modification"]))
          puts "#{@name},#{@age}"
          @a.write("#{@name},#{@age}\n")        
        end
    end 
end   
class Age_vote < Csv_data
    def initialize(name,age)
        super(name)
        @age=age
    end
    def csv_data
    
      @i=File.open(ARGV[2],"w+")
      @i.write("name"",""age \n")
      @b=File.open(ARGV[2],"a+")
       if eval(@age+($data_config["modification"]))
           puts "#{@name},#{@age},T"
            @b.write("#{@name},#{@age},T\n")
        else
            puts"#{@name},#{@age},F"
            @b.write("#{@name},#{@age},F\n")
        end
    end
end 

class Date_change < Csv_data
  def initialize(name,date)
    super(name)
    @date=date
  end
  def csv_data  
    @k=File.open(ARGV[2],"w+")
    @k.write("name"",""date\n")
    @c=File.open(ARGV[2],"a")
     dateyear=Date.parse(@date)
      puts "#{@name},#{dateyear.strftime('%b %d %Y')}"
      @c.write("#{@name},#{dateyear.strftime($data_config["mod"])}\n")
  end
end

class Full_name < Csv_data
  def initialize(name,lastname)
    super(name)
    @lastname=lastname
  end
  def csv_data
    @l=File.open(ARGV[2],"w+")
    @d=File.open(ARGV[2],"a+")
    #fullname="#{@name.concat(@lastname)}\n"
    puts "#{@fullname}\n"
    #@d.write("#{@name} #{@fullname($data_config["mod"])}\n")
    @d.write("#{@name} #{@lastname}\n")
  end
end
def above
   CSV.foreach(ARGV[0],headers:true) do |a|
  csv=Age_50.new(
      a[0].split("|")[0],
      a[0].split("|")[1]
      )
       csv.csv_data
   end
end
def vote
  CSV.foreach(ARGV[0],headers:true) do |b|
   csv=Age_vote.new(
     b[0].split("|")[0],
     b[0].split("|")[1]
   )
    csv.csv_data
  end
end
def datechange
CSV.foreach(ARGV[0],headers:true) do |c|
  csv=Date_change.new(
    c[0].split("|")[0],
    c[0].split("|")[1]
  )
  csv.csv_data
end
end
def fullname
  CSV.foreach(ARGV[0],headers:true) do |d|
    csv=Full_name.new(
      d[0].split("|")[0],
      d[0].split("|")[1]
    )
    csv.csv_data
  end
end
case $data_config["test_case"]
when "1"
  above()
when "2" 
  vote()
when"3"
  datechange()
when "4"
  fullname()
end