# frozen_string_literal: true
require 'rails_helper'

RSpec.describe Admin::NeighborhoodsController, type: :controller do
  let (:neighborhood) { @neighborhood = create :neighborhood }

  before do
    sign_in neighborhood
  end

  describe 'GET #index' do
    it 'loads the index view' do
      process :index, method: :get
      expect(response).to render_template(:index)
    end

    it 'loads successfully with an HTTP 200 status code' do
      process :index, method: :get

      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it 'loads an array of neighborhoods' do
      neighborhoods = create_list(:neighborhood, 3)
      process :index, method: :get

      expect(assigns(:neighborhoods)).to match_array(neighborhoods << @neighborhood)
    end
  end

  describe 'GET #new' do
    it 'loads the new view' do
      process :new, method: :get
      expect(response).to render_template(:new)
    end

    it 'loads successfully with an HTTP 200 status code' do
      process :new, method: :get

      expect(response).to be_success
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET #edit' do
    before do
      @neighborhood = create(:neighborhood)
    end

    it 'loads the edit view' do
      process :edit, method: :get, params: { id: @neighborhood }
      expect(response).to render_template(:edit)
    end

    it 'loads successfully with an HTTP 200 status code' do
      process :edit, method: :get, params: { id: @neighborhood }

      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it 'loads the right neighborhood' do
      process :edit, method: :get, params: { id: @neighborhood }

      expect(assigns(:neighborhood)).to eq(@neighborhood)
    end
  end

  describe 'POST #create' do
    context 'with valid attributes' do
      it 'creates an neighborhood' do
        expect {
          process :create, method: :post, params: { neighborhood: attributes_for(:neighborhood) }
        }.to change(Neighborhood, :count).by(1)
      end

      it 'redirects to the index view' do
        process :create, method: :post, params: { neighborhood: attributes_for(:neighborhood) }

        expect(response).to redirect_to(admin_neighborhoods_path)
      end
    end

    context 'with invalid attributes' do
      it 'does not create an neighborhood' do
        expect {
          process :create, method: :post, params: { neighborhood: attributes_for(:neighborhood, password: nil) }
        }.to_not change(Neighborhood, :count)
      end

      it 're-renders the new view' do
        process :create, method: :post, params: { neighborhood: attributes_for(:neighborhood, password: nil) }

        expect(response).to render_template(:new)
      end
    end
  end

  describe 'PUT #update' do
    before do
      @neighborhood = create(:neighborhood, password: 'password')
    end

    context 'with valid attributes' do
      it 'updates the neighborhood' do
        process :update, method: :put, params: { id: @neighborhood, neighborhood: attributes_for(:neighborhood, first_name: 'Phoenix') }

        @neighborhood.reload
        expect(assigns(:neighborhood).first_name).to eq('Phoenix')
      end

      it 'redirects to the index view' do
        process :update, method: :put, params: { id: @neighborhood, neighborhood: attributes_for(:neighborhood, first_name: 'Phoenix', current_password: 'password') }

        expect(response).to redirect_to(admin_neighborhoods_path)
      end
    end

    context 'with invalid attributes' do
      it 'does not update the neighborhood' do
        process :update, method: :put, params: { id: @neighborhood, neighborhood: attributes_for(:neighborhood, first_name: nil) }

        @neighborhood.reload
        expect(@neighborhood.first_name).to_not eq(nil)
        expect(assigns(:neighborhood)).to eq(@neighborhood)
      end

      it 're-renders the edit view' do
        process :update, method: :put, params: { id: @neighborhood, neighborhood: attributes_for(:neighborhood, first_name: nil) }

        expect(response).to render_template(:edit)
      end
    end
  end

  describe 'DELETE #destroy' do
    context 'with valid attributes' do
      before do
        @neighborhood = create(:neighborhood)
      end

      it 'deletes the neighborhood' do
        expect {
          process :destroy, method: :delete, params: { id: @neighborhood }
        }.to change(Neighborhood, :count).by(-1)
      end

      it 'redirects to the index view' do
        process :destroy, method: :delete, params: { id: @neighborhood }

        expect(response).to redirect_to(admin_neighborhoods_path)
      end
    end

    context 'with invalid attributes' do
      it 'does not delete the neighborhood' do
        expect {
          process :destroy, method: :delete, params: { id: @neighborhood }
        }.to_not change(Neighborhood, :count)
      end

      it 'redirects to the index view' do
        process :destroy, method: :delete, params: { id: @neighborhood }

        expect(response).to redirect_to(admin_neighborhoods_path)
      end
    end
  end
end
