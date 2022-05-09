module Sam
 def self.hello
    p "hi"
 end
end

class A
    module Sam
        def self.hello
           p "hi"
        end
       end
end

Sam.hello

namespace "Sam"
end