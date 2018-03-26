class CreateClientNeighborhoods < ActiveRecord::Migration[5.1]
  def change
    create_table :client_neighborhoods do |t|
      t.belongs_to :neighborhood, index: true
      t.belongs_to :client, index: true
      t.timestamps
    end
  end
end
