require 'date'
require 'json'

class Read_file
    def read(fname)
        @read_file=File.open(fname,"r")
        @read_line=@read_file.readlines()
    end
end

class Dob < Read_file
    def dob(fname)
        @write_file=File.open(fname,"w+")
        @write_line="#{@read_line[0].split("|")[0]},#{@read_line[0].split("|")[1]}"
        @write_file.write(@write_line)
        (1..@read_line.length-1).each do |i|
            @dob=Date.parse("#{@read_line[i].split("|")[1]}")
            @write_line="#{@read_line[i].split("|")[0]},#{@dob.strftime($test_case['format'])}\n"
            @write_file.write(@write_line)
        end
    end
end

class Age < Read_file 
    def age_lt_50(fname)
        @write_file=File.open(fname,"w+")
        @write_line="#{@read_line[0].split("|")[0]},#{@read_line[0].split("|")[1]}"
        @write_file.write(@write_line)
        (1..@read_line.length-1).each do |i|
            if(eval($test_case['format']+@read_line[i].split("|")[1]))
            @write_line="#{@read_line[i].split("|")[0]},#{@read_line[i].split("|")[1]}"
            @write_file.write(@write_line)
            end
        end
    end
    def age_gt_18(fname)
        @write_file=File.open(fname,"w+")
        @write_line="#{@read_line[0].split("|")[0]},#{@read_line[0].split("|")[1].chomp()},#{$test_case['newHead']}\n"
        @write_file.write(@write_line)
        (1..@read_line.length-1).each do |i|
            if(eval($test_case['format']+@read_line[i].split("|")[1]))
            @write_line="#{@read_line[i].split("|")[0]},#{@read_line[i].split("|")[1].chomp()},#{$test_case['true']}\n"
            @write_file.write(@write_line)
            else
            @write_line="#{@read_line[i].split("|")[0]},#{@read_line[i].split("|")[1].chomp()},#{$test_case['false']}\n"
            @write_file.write(@write_line)
            end
        end
    end
end

class Full_name < Read_file
    def full_name(fname)
        @write_file=File.open(fname,"w+")
        @write_line="#{$test_case['header']}\n"
        @write_file.write(@write_line)
        (1..@read_line.length-1).each do |i|
            @write_line="#{@read_line[i].split("|")[0]} #{@read_line[i].split("|")[1]}"
            @write_file.write(@write_line)
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
