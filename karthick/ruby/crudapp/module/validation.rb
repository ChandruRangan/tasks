require "time"
require "date"
module Validatable
    def self.date_by_month(date)
        b=Date.parse(date)
        modifed_date=b.strftime("%m-%d-%Y")
    end
    def self.date_by_year(date)
        a=Date.strptime(date, '%m-%d-%Y')
        modifed_date=a.strftime("%Y-%m-%d")
    end    
end
