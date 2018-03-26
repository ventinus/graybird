class CreateClients < ActiveRecord::Migration[5.1]
  def change
    create_table :clients do |t|
      t.string  :first_name
      t.string  :last_name
      t.string  :phone_number
      t.string  :email
      t.text    :notes
      t.text    :message
      t.integer :preferred_communication, default: 0
      t.boolean :confirmed, default: false
      t.boolean :contacted, default: false
      t.integer :price_min, default: 0
      t.integer :price_max, default: 1000000

      t.timestamps
    end
  end
end
