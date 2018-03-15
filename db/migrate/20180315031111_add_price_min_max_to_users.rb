class AddPriceMinMaxToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :price_min, :integer, default: 0
    add_column :users, :price_max, :integer, default: 1000000
  end
end
