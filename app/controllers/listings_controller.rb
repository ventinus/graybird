# frozen_string_literal: true

class ListingsController < ApplicationController
  def index
    @listings = Listing.all
  end

  def show
    @listing = Listing.friendly.find(params[:id])
  end
end
