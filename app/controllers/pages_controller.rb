# frozen_string_literal: true

class PagesController < ApplicationController
  layout :resolve_layout

  def index
  end

  def admin
    gon.listing_enums = listing_enums
    gon.client_enums = client_enums
    gon.school_enums = school_enums
    gon.neighborhoods = neighborhoods
    gon.regions = regions
  end

  private
  def resolve_layout
    case action_name
    when 'admin' then 'admin/application'
    else 'application'
    end
  end

  def listing_enums
    {
      role: class_enum_collection(Listing, :role),
      property_type: class_enum_collection(Listing, :property_type),
      status: class_enum_collection(Listing, :status),
      garage_type: class_enum_collection(Listing, :garage_type),
      water: class_enum_collection(Listing, :water),
      sewer: class_enum_collection(Listing, :sewer),
      hot_water: class_enum_collection(Listing, :hot_water),
      heating: class_enum_collection(Listing, :heating),
      cooling: class_enum_collection(Listing, :cooling),
      hoa_frequency: class_enum_collection(Listing, :hoa_frequency)
    }
  end

  def client_enums
    {
      preferred_communication: class_enum_collection(Client, :preferred_communication)
    }
  end

  def school_enums
    { kind: class_enum_collection(School, :kind) }
  end

  def neighborhoods
    Neighborhood.all.map {|n| [n.name, n.name]}
  end

  def regions
    Region.all.map {|n| [n.name, n.name]}
  end
end
