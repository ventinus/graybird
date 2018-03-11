class CreateListingPhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :listing_photos do |t|
      t.text    :image_data
      t.integer :position
      t.string  :caption

      t.belongs_to :listing, index: true

      t.timestamps
    end
  end
end
