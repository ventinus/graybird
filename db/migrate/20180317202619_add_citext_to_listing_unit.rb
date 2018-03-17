class AddCitextToListingUnit < ActiveRecord::Migration[5.1]
  def change
    change_column :listings, :unit, :citext
    add_index :listings, :unit
  end
end
