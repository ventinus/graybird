# == Schema Information
#
# Table name: schools
#
#  id              :integer          not null, primary key
#  kind            :integer          not null
#  name            :string           not null
#  address         :string           not null
#  city            :string           not null
#  state           :string           not null
#  zip             :string           not null
#  neighborhood_id :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe School, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
