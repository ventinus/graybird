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

require 'rails_helper'

RSpec.describe Blog, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
