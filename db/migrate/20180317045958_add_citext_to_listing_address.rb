class AddCitextToListingAddress < ActiveRecord::Migration[5.1]
  def change
    enable_extension :citext
    change_column :listings, :address, :citext
    add_index :listings, :address
  end
end
