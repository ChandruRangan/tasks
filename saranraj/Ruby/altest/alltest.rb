
require 'json'
require 'date'
require 'csv'
file = File.read(ARGV[1]);
$datainconfig=JSON.parse(file);
  
class Alltest 

  def perform (arg)
    arg.perform
  end
end
class TestCase4
  def perform
    filewrite = File.new(ARGV[2], "w+") 
    fileobj=File.open(ARGV[0],"r")
    k=fileobj.readlines();
    filewrite.write("name,age,#{$datainconfig['modification']['new-col']}\n")
    for i in 1..k.length-1 do 
        if  (  eval($datainconfig['modification']['age']+k[i].split("|")[1])) 
          filewrite.write("#{k[i].split("|")[0]},#{k[i].split("|")[1].chomp()},T\n")
        else 
          filewrite.write("#{k[i].split("|")[0]},#{k[i].split("|")[1].chomp()},F\n")
        end
    end

  end
end
class TestCase3
  def perform
    filewrite = File.new(ARGV[2], "w+")
    fileobj=File.open(ARGV[0],"r")
    k=fileobj.readlines();
    filewrite.write("#{$datainconfig['modification']['new-col']}\n")
    for i in 1..k.length-1 do 
        a=k[i].split("|")[0]
        filewrite.write("#{a} #{k[i].split("|")[1]}\n")
    end
  end
end
class TestCase2
  def perform
    filewrite = File.new(ARGV[2], "w+")
    fileobj =File.open(ARGV[0],"r");
    k=fileobj.readlines();
    filewrite.write("#{k[0].split("|")[0]}, #{k[0].split("|")[1]}")     
    for line in 1..k.length-1 do
      if (eval($datainconfig['modification']['age']+k[line].split("|")[1] ))
       filewrite.write( "#{k[line].split("|")[0]}, #{k[line].split("|")[1]}")
      end
    end
  end
end
class TestCase1
  def perform
    fileread =File.open(ARGV[0],"r");
    filewrite=File.new(ARGV[2],"w+")
    k=fileread.readlines();
    filewrite.write("#{k[0].split("|")[0]}, #{k[0].split("|")[1]}")
    for lines in 1..k.length-1 do
      strdate= k[lines].split("|")[1];
      date = Date.parse(strdate)
      filewrite.write( "#{k[lines].split("|")[0]}, #{date.strftime($datainconfig['modification']['date_format'])}\n")
    end
  end
end

alltestobj=Alltest.new()

case $datainconfig['test_case']
when "4"
  test_4=TestCase4.new()
  alltestobj.perform(test_4)
when "3" 
  test_3=TestCase3.new()
  alltestobj.perform(test_3)
when "2"
  test_2=TestCase2.new()
  alltestobj.perform(test_2)
when "1"
  test_1=TestCase1.new()
  alltestobj.perform(test_1)

end

