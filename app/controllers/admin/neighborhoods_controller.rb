class Admin::NeighborhoodsController < Admin::ApplicationController
  before_action :set_neighborhood, only: [:edit, :update, :destroy]

  def index
    @neighborhoods = Neighborhood.includes(:region).all
  end

  def new
    @neighborhood = Neighborhood.new
  end

  def edit
  end

  def create
    @neighborhood = Neighborhood.new(neighborhood_params)
    if @neighborhood.save
      redirect_to admin_neighborhoods_path, notice: "Neighborhood successfully created."
    else
      flash[:error] = "Neighborhood was not created."
      render :new
    end
  end

  def update
    if @neighborhood.update_attributes(neighborhood_params)
      redirect_to admin_neighborhoods_path, notice: "Neighborhood successfully updated"
    else
      flash[:error] = "Neighborhood was not updated"
      render :edit
    end
  end

  def destroy
    if @neighborhood.destroy
      redirect_to admin_neighborhoods_path, notice: 'Neighborhood was successfully deleted'
    else
      redirect_to admin_neighborhoods_path, notice: 'Neighborhood was not deleted.'
    end
  end

  private

  def set_neighborhood
    @neighborhood = Neighborhood.find(params[:id])
  end

  def neighborhood_params
    params.require(:neighborhood).permit(:name, :description, :region_id)
  end
end
