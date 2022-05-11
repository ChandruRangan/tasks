module Showable
	def show_lookup_path(class_name)
		path=class_name.ancestors
		puts "----------------"
	 path.each_with_index do |val, i|
	  puts val
		if (i!=path.length-1)
	 	puts "|" 
		end 
 	 end
 	  puts "----------------"
	end
end