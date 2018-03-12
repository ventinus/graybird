class Admin::ListingsController < Admin::ApplicationController
  before_action :set_listing, only: [:edit, :update, :destroy]

  def index
    @listings = Listing.includes(:neighborhood).order('updated_at DESC').all
  end

  def new
    @listing = Listing.new
    @listing.photos.build
  end

  def edit; end

  def create
    @listing = Listing.new(listing_params)
    if @listing.save
      redirect_to admin_listings_path, notice: "Listing successfully created."
    else
      flash[:error] = "Listing was not created."
      render :new
    end
  end

  def update
    if @listing.update_attributes(listing_params)
      redirect_to admin_listings_path, notice: "Listing successfully updated"
    else
      flash[:error] = "Listing was not updated"
      render :edit
    end
  end

  def destroy
    if @listing.destroy
      redirect_to admin_listings_path, notice: 'Listing was successfully deleted'
    else
      redirect_to admin_listings_path, notice: 'Listing was not deleted.'
    end
  end

  private

  def set_listing
    @listing = Listing.friendly.find(params[:id])
  end

  def listing_params
    params.require(:listing).permit(:property_type, :rmls_number, :role, :price, :address, :unit, :zip, :city,
                                    :state, :status, :bedrooms, :bathrooms, :description, :sq_feet, :year_built,
                                    :garage_size, :garage_type, :water, :sewer, :hot_water, :heating, :cooling,
                                    :property_taxes, :hoa_dues, :hoa_frequency, :community_description, :neighborhood_id,
                                    photos_attributes: [:id, :caption, :image, :position, :listing_id, :_destroy])
  end
end
