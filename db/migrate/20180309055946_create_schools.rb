class CreateSchools < ActiveRecord::Migration[5.1]
  def change
    create_table :schools do |t|
      t.integer :kind,    null: false
      t.string :name,     null: false
      t.string :address,  null: false
      t.string :city,     null: false
      t.string :state,    null: false
      t.string :zip,      null: false

      t.belongs_to :neighborhood, index: true

      t.timestamps
    end
  end
end
