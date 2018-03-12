class AddSlugToListings < ActiveRecord::Migration[5.1]
  def change
    add_column :listings, :slug, :string, unique: true
  end
end
