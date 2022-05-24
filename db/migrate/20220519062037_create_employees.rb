class CreateEmployees < ActiveRecord::Migration[7.0]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :email
      t.date :dob
      t.date :jod

      t.timestamps
    end
  end
end
