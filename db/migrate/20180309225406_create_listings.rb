class CreateListings < ActiveRecord::Migration[5.1]
  def change
    create_table :listings do |t|
      t.integer :property_type, null: false
      t.integer :rmls_number,   null: false
      t.integer :role,          null: false
      t.integer :price,         null: false
      t.string  :address,       null: false
      t.string  :unit
      t.string  :zip,           null: false
      t.string  :city,          null: false
      t.string  :state,         null: false
      t.integer :status,        null: false
      t.integer :bedrooms,      null: false
      t.decimal :bathrooms,     null: false
      t.text    :description,   null: false
      t.integer :sq_feet
      t.string  :year_built
      t.integer :garage_size
      t.integer :garage_type
      t.integer :water
      t.integer :sewer
      t.integer :hot_water
      t.integer :heating
      t.integer :cooling
      t.decimal :property_taxes
      t.integer :hoa_dues,      default: 0
      t.integer :hoa_frequency
      t.text    :community_description

      t.belongs_to :neighborhood, index: true

      t.timestamps
    end
  end
end
