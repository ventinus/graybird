class CreateBlogs < ActiveRecord::Migration[5.1]
  def change
    create_table :blogs do |t|
      t.string    :title
      t.text      :body
      t.text      :image_data
      t.datetime  :close_date
      t.datetime  :published_at

      t.timestamps
    end
  end
end
