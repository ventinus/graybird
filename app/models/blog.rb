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

class Blog < ApplicationRecord
  include Publishable
end
