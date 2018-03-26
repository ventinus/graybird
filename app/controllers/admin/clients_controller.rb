class Admin::ClientsController < Admin::ApplicationController
  before_action :set_client, only: [:edit, :update, :destroy]

  def index
    @clients = Client.all
  end

  def new
    @client = Client.new
  end

  def edit
  end

  def create
    @client = Client.new(client_params)
    if @client.save
      redirect_to admin_clients_path, notice: "Client successfully created."
    else
      flash[:error] = "Client was not created."
      render :new
    end
  end

  def update
    if @client.update_attributes(client_params)
      redirect_to admin_clients_path, notice: "Client successfully updated"
    else
      flash[:error] = "Client was not updated"
      render :edit
    end
  end

  def destroy
    if @client.destroy
      redirect_to admin_clients_path, notice: 'Client was successfully deleted'
    else
      redirect_to admin_clients_path, notice: 'Client was not deleted.'
    end
  end

  private

  def set_client
    @client = Client.find(params[:id])
  end

  def client_params
    params.require(:client).permit(:first_name, :last_name, :phone_number, :email,
                                  :notes, :preferred_communication, :confirmed,
                                  :contacted, :price_min, :price_max, neighborhood_ids: [])
  end
end
