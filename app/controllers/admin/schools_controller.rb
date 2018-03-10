class Admin::SchoolsController < Admin::ApplicationController
  before_action :set_school, only: [:edit, :update, :destroy]

  def index
    @schools = School.includes(:neighborhood).all
  end

  def new
    @school = School.new
  end

  def edit
  end

  def create
    @school = School.new(school_params)
    if @school.save
      redirect_to admin_schools_path, notice: "School successfully created."
    else
      flash[:error] = "School was not created."
      render :new
    end
  end

  def update
    if @school.update_attributes(school_params)
      redirect_to admin_schools_path, notice: "School successfully updated"
    else
      flash[:error] = "School was not updated"
      render :edit
    end
  end

  def destroy
    if @school.destroy
      redirect_to admin_schools_path, notice: 'School was successfully deleted'
    else
      redirect_to admin_schools_path, notice: 'School was not deleted.'
    end
  end

  private

  def set_school
    @school = School.find(params[:id])
  end

  def school_params
    params.require(:school).permit(:kind, :name, :address, :city, :state, :zip, :neighborhood_id)
  end
end
