class CreateNeighborhoods < ActiveRecord::Migration[5.1]
  def change
    create_table :neighborhoods do |t|
      t.string :name, null: false
      t.text   :description

      t.belongs_to :region, index: true

      t.timestamps
    end
  end
end
