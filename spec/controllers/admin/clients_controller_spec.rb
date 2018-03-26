# frozen_string_literal: true
require 'rails_helper'

RSpec.describe Admin::ClientsController, type: :controller do
  let (:administrator) { create :administrator }

  before do
    sign_in administrator
  end

  describe 'GET #index' do
    it 'populates an array of clients' do
      clients_list = create_list(:client, 3)
      process :index, method: :get
      expect(assigns(:clients)).to match_array(clients_list)
    end

    it 'returns http status success' do
      process :index, method: :get
      expect(response).to have_http_status(:success)
    end

    it 'renders the index template' do
      process :index, method: :get
      expect(response).to render_template(:index)
    end
  end

  describe 'GET #new' do
    it 'renders the new view' do
      process :new, method: :get
      expect(response).to render_template(:new)
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET #edit' do
    before do
      @client = create(:client)
    end

    it 'loads the edit view' do
      process :edit, method: :get, params: { id: @client }
      expect(response).to render_template(:edit)
    end

    it 'loads successfully with an HTTP 200 status code' do
      process :edit, method: :get, params: { id: @client }

      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it 'loads the right client' do
      process :edit, method: :get, params: { id: @client }

      expect(assigns(:client)).to eq(@client)
    end
  end

  describe 'POST #create' do
    context 'with valid parameters' do
      it 'creates a client' do
        expect {
          process :create, method: :post, params: { client: attributes_for(:client) }
        }.to change(Client, :count).by(1)
      end

      it 'redirects to the index view' do
        process :create, method: :post, params: { client: attributes_for(:client) }
        expect(response).to redirect_to(admin_clients_path)
      end
    end

    # context 'with invalid parameters' do
    #   it 'does not create a client' do
    #     expect {
    #       process :create, method: :post, params: { client: attributes_for(:client, first_name: nil) }
    #     }.to_not change(Client, :count)
    #   end

    #   it 'renders the new view' do
    #     process :create, method: :post, params: { client: attributes_for(:client, first_name: nil) }
    #     expect(response).to render_template(:new)
    #   end
    # end
  end

  describe 'PUT #update' do
    before do
      @client = create(:client)
    end

    context 'with valid parameters' do
      it 'updates the client' do
        process :update, method: :put, params: { id: @client.id, client: attributes_for(:client, first_name: 'The Verge') }

        @client.reload
        expect(assigns(:client)).to eq(@client)
      end

      it 'redirects to the clients index path' do
        process :update, method: :put, params: { id: @client.id, client: attributes_for(:client, first_name: 'The Verge') }

        expect(response).to redirect_to(admin_clients_path)
      end
    end

    # context 'with invalid parameters' do
    #   it 'does not update the client' do
    #     name = @client.name
    #     process :update, method: :put, params: { id: @client.id, client: attributes_for(:client, first_name: nil) }

    #     @client.reload
    #     expect(@client.name).to eq(name)
    #     expect(assigns(:client)).to eq(@client)
    #   end

    #   it 'renders the edit view' do
    #     process :update, method: :put, params: { id: @client.id, client: attributes_for(:client, first_name: nil) }
    #     expect(response).to render_template(:edit)
    #   end
    # end
  end

  describe 'DELETE #destroy' do
    before do
      @client = create(:client)
    end

    it 'deletes the client' do
      expect {
        process :destroy, method: :delete, params: { id: @client.id }
      }.to change(Client, :count).by(-1)
    end

    it 'renders the index view' do
      process :destroy, method: :delete, params: { id: @client.id }
      expect(response).to redirect_to(admin_clients_path)
    end
  end
end
