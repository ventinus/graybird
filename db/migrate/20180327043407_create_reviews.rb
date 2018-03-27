class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.text        :body
      t.belongs_to  :client, index: true
      t.belongs_to  :neighborhood, index: true

      t.timestamps
    end
  end
end
