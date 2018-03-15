class Admin::UsersController < Admin::ApplicationController
  before_action :set_user, only: [:edit, :update, :destroy]

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def edit
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to admin_users_path, notice: "User successfully created."
    else
      flash[:error] = "User was not created."
      render :new
    end
  end

  def update
    if @user.update_attributes(user_params)
      redirect_to admin_users_path, notice: "User successfully updated"
    else
      flash[:error] = "User was not updated"
      render :edit
    end
  end

  def destroy
    if @user.destroy
      redirect_to admin_users_path, notice: 'User was successfully deleted'
    else
      redirect_to admin_users_path, notice: 'User was not deleted.'
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :phone_number, :email,
                                  :notes, :preferred_communication, :confirmed,
                                  :contacted, :price_min, :price_max, neighborhood_ids: [])
  end
end
