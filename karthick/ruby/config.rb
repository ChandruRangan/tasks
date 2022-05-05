require 'date'
require 'json'

class Read_file
    def read(fname)
        @r=File.open(fname,"r")
        @read=@r.readlines()
    end
end

class Dob < Read_file
    def dob(fname)
        @w=File.open(fname,"w+")
        @wr="#{@read[0].split("|")[0]},#{@read[0].split("|")[1]}"
        @w.write(@wr)
        (1..@read.length-1).each do |i|
            @dob=Date.parse("#{@read[i].split("|")[1]}")
            @wr="#{@read[i].split("|")[0]},#{@dob.strftime($test_case['format'])}\n"
            @w.write(@wr)
        end
    end
end

class Age < Read_file 
    def age_lt_50(fname)
        @w=File.open(fname,"w+")
        @wr="#{@read[0].split("|")[0]},#{@read[0].split("|")[1]}"
        @w.write(@wr)
        (1..@read.length-1).each do |i|
            if(eval("#{@read[i].split("|")[1]}")<50)
            @wr="#{@read[i].split("|")[0]},#{@read[i].split("|")[1]}"
            @w.write(@wr)
            end
        end
    end
    def age_gt_18(fname)
        @w=File.open(fname,"w+")
        @wr="#{@read[0].split("|")[0]},#{@read[0].split("|")[1].chomp()},Eligible To Vote\n"
        @w.write(@wr)
        (1..@read.length-1).each do |i|
            if(eval("#{@read[i].split("|")[1]}")>18)
            @wr="#{@read[i].split("|")[0]},#{@read[i].split("|")[1].chomp()},T\n"
            @w.write(@wr)
            else
            @wr="#{@read[i].split("|")[0]},#{@read[i].split("|")[1].chomp()},F\n"
            @w.write(@wr)
            end
        end
    end
end

class Full_name < Read_file
    def full_name(fname)
        @w=File.open(fname,"w+")
        @wr="Name\n"
        @w.write(@wr)
        (1..@read.length-1).each do |i|
            @wr="#{@read[i].split("|")[0]} #{@read[i].split("|")[1]}"
            @w.write(@wr)
        end
    end
end

$ip_path=ARGV[0]
$config_path=File.read(ARGV[1])
$op_path=ARGV[2]

$test_case=JSON.parse($config_path)

module Status
    puts "Data Generated successfully. View the file at #{$op_path}"
end

case $test_case['case']
 when 1
    dob_obj=Dob.new
    dob_obj.read($ip_path)
    dob_obj.dob($op_path)
    include Status

 when 2
    age_obj=Age.new
    age_obj.read($ip_path)
    age_obj.age_lt_50($op_path)
    include Status

 when 3
    age_obj=Age.new
    age_obj.read($ip_path)
    age_obj.age_gt_18($op_path)
    include Status

 when 4
    full_name_obj=Full_name.new
    full_name_obj.read($ip_path)
    full_name_obj.full_name($op_path)
    include Status
end
