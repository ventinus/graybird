# frozen_string_literal: true

class PagesController < ApplicationController
  layout :resolve_layout

  def index
  end

  def admin
  end

  private
  def resolve_layout
    case action_name
    when 'admin' then 'admin/application'
    else 'application'
    end
  end
end
