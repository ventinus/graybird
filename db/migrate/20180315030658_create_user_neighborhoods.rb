class CreateUserNeighborhoods < ActiveRecord::Migration[5.1]
  def change
    create_table :user_neighborhoods do |t|
      t.belongs_to :neighborhood, index: true
      t.belongs_to :user, index: true
      t.timestamps
    end
  end
end
