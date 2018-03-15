# == Schema Information
#
# Table name: users
#
#  id                      :integer          not null, primary key
#  first_name              :string
#  last_name               :string
#  phone_number            :string
#  email                   :string
#  notes                   :text
#  preferred_communication :integer          default("email")
#  confirmed               :boolean          default(FALSE)
#  contacted               :boolean          default(FALSE)
#  created_at              :datetime         not null
#  updated_at              :datetime         not null
#  price_min               :integer          default(0)
#  price_max               :integer          default(1000000)
#

class User < ApplicationRecord
  has_many :listings
  has_many :user_neighborhoods
  has_many :neighborhoods, through: :user_neighborhoods

  enum preferred_communication: [:email, :call, :text]

  def phone_number=(num)
    write_attribute(:phone_number, num.gsub(/[^\d]/, ''))
  end

  def full_name
    "#{first_name} #{last_name}"
  end

end
