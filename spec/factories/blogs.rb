# == Schema Information
#
# Table name: blogs
#
#  id           :integer          not null, primary key
#  title        :string
#  body         :text
#  image_data   :text
#  close_date   :datetime
#  published_at :datetime
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

FactoryGirl.define do
  factory :blog do
    title           { Faker::Book.title }
    body            { Faker::Lorem.paragraphs(2) }
    close_date      { Time.zone.now }
    published_at    { Time.zone.now }
  end
end
