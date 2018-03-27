# == Schema Information
#
# Table name: clients
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
#  message                 :text
#

class Client < ApplicationRecord
  # has_many :listings
  has_many :reviews, dependent: :destroy
  has_many :client_neighborhoods
  has_many :neighborhoods, through: :client_neighborhoods

  enum preferred_communication: [:email, :call, :text]

  validates_uniqueness_of :email

  def phone_number=(num)
    write_attribute(:phone_number, num.gsub(/[^\d]/, ''))
  end

  def full_name
    "#{first_name} #{last_name}"
  end

end
