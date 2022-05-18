class Pro_emp_search
    def self.search(search)
        DB.exec("select * from project where '#{search}'=ANY(teammembers)")
    end
end

