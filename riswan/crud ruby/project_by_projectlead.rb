class Pro_prolead_search
    def self.search(search)
        DB.exec("select * from project where projectlead='#{search}'")
    end
end