# == Schema Information
#
# Table name: regions
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe Region, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
