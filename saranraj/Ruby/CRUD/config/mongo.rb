require 'rubygems'
require 'mongo'
 class Dbconnection
  attr_accessor :emp,:pro

   def initialize
    mongo_uri = 'mongodb://localhost:27017/company'
    db=Mongo::Client.new(mongo_uri).database()
    @emp=db.collection('Employee')
    @pro=db.collection('Project')
   end
 end

