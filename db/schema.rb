# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180327041344) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "citext"

  create_table "administrators", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_administrators_on_confirmation_token", unique: true
    t.index ["email"], name: "index_administrators_on_email", unique: true
    t.index ["reset_password_token"], name: "index_administrators_on_reset_password_token", unique: true
  end

  create_table "blogs", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.text "image_data"
    t.datetime "close_date"
    t.datetime "published_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "client_neighborhoods", force: :cascade do |t|
    t.bigint "neighborhood_id"
    t.bigint "client_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["client_id"], name: "index_client_neighborhoods_on_client_id"
    t.index ["neighborhood_id"], name: "index_client_neighborhoods_on_neighborhood_id"
  end

  create_table "clients", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "phone_number"
    t.string "email"
    t.text "notes"
    t.integer "preferred_communication", default: 0
    t.boolean "confirmed", default: false
    t.boolean "contacted", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "price_min", default: 0
    t.integer "price_max", default: 1000000
    t.text "message"
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type"
    t.index ["sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_id"
    t.index ["sluggable_type"], name: "index_friendly_id_slugs_on_sluggable_type"
  end

  create_table "listing_photos", force: :cascade do |t|
    t.text "image_data"
    t.integer "position"
    t.string "caption"
    t.bigint "listing_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["listing_id"], name: "index_listing_photos_on_listing_id"
  end

  create_table "listings", force: :cascade do |t|
    t.integer "property_type", null: false
    t.integer "rmls_number", null: false
    t.integer "role", null: false
    t.integer "price", null: false
    t.citext "address", null: false
    t.citext "unit"
    t.string "zip", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.integer "status", null: false
    t.integer "bedrooms", null: false
    t.decimal "bathrooms", null: false
    t.text "description", null: false
    t.integer "sq_feet"
    t.string "year_built"
    t.integer "garage_size"
    t.integer "garage_type"
    t.integer "water"
    t.integer "sewer"
    t.integer "hot_water"
    t.integer "heating"
    t.integer "cooling"
    t.decimal "property_taxes"
    t.integer "hoa_dues", default: 0
    t.integer "hoa_frequency"
    t.text "community_description"
    t.bigint "neighborhood_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug"
    t.index ["address"], name: "index_listings_on_address"
    t.index ["neighborhood_id"], name: "index_listings_on_neighborhood_id"
    t.index ["unit"], name: "index_listings_on_unit"
  end

  create_table "neighborhoods", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.bigint "region_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["region_id"], name: "index_neighborhoods_on_region_id"
  end

  create_table "regions", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "schools", force: :cascade do |t|
    t.integer "kind", null: false
    t.string "name", null: false
    t.string "address", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zip", null: false
    t.bigint "neighborhood_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["neighborhood_id"], name: "index_schools_on_neighborhood_id"
  end

  create_table "versions", force: :cascade do |t|
    t.string "item_type", null: false
    t.integer "item_id", null: false
    t.string "event", null: false
    t.string "whodunnit"
    t.text "object"
    t.datetime "created_at"
    t.index ["item_type", "item_id"], name: "index_versions_on_item_type_and_item_id"
  end

end
