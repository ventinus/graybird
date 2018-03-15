class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string  :first_name
      t.string  :last_name
      t.string  :phone_number
      t.string  :email
      t.text    :notes
      t.integer :preferred_communication, default: 0
      t.boolean :confirmed, default: false
      t.boolean :contacted, default: false

      t.timestamps
    end
  end
end
