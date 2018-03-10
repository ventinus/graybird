# frozen_string_literal: true
require 'rails_helper'

RSpec.describe Admin::NeighborhoodsController, type: :controller do
  let (:administrator) { create :administrator }

  before do
    sign_in administrator
  end

  describe 'GET #index' do
    it 'populates an array of neighborhoods' do
      neighborhoods_list = create_list(:neighborhood, 3)
      process :index, method: :get
      expect(assigns(:neighborhoods)).to match_array(neighborhoods_list)
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
    context 'with valid parameters' do
      it 'creates a neighborhood' do
        expect {
          process :create, method: :post, params: { neighborhood: attributes_for(:neighborhood) }
        }.to change(Neighborhood, :count).by(1)
      end

      it 'redirects to the index view' do
        process :create, method: :post, params: { neighborhood: attributes_for(:neighborhood) }
        expect(response).to redirect_to(admin_neighborhoods_path)
      end
    end

    context 'with invalid parameters' do
      it 'does not create a neighborhood' do
        expect {
          process :create, method: :post, params: { neighborhood: attributes_for(:neighborhood, name: nil) }
        }.to_not change(Neighborhood, :count)
      end

      it 'renders the new view' do
        process :create, method: :post, params: { neighborhood: attributes_for(:neighborhood, name: nil) }
        expect(response).to render_template(:new)
      end
    end
  end

  describe 'PUT #update' do
    before do
      @neighborhood = create(:neighborhood)
    end

    context 'with valid parameters' do
      it 'updates the neighborhood' do
        process :update, method: :put, params: { id: @neighborhood.id, neighborhood: attributes_for(:neighborhood, name: 'The Verge') }

        @neighborhood.reload
        expect(assigns(:neighborhood)).to eq(@neighborhood)
      end

      it 'redirects to the neighborhoods index path' do
        process :update, method: :put, params: { id: @neighborhood.id, neighborhood: attributes_for(:neighborhood, name: 'The Verge') }

        expect(response).to redirect_to(admin_neighborhoods_path)
      end
    end

    context 'with invalid parameters' do
      it 'does not update the neighborhood' do
        name = @neighborhood.name
        process :update, method: :put, params: { id: @neighborhood.id, neighborhood: attributes_for(:neighborhood, name: nil) }

        @neighborhood.reload
        expect(@neighborhood.name).to eq(name)
        expect(assigns(:neighborhood)).to eq(@neighborhood)
      end

      it 'renders the edit view' do
        process :update, method: :put, params: { id: @neighborhood.id, neighborhood: attributes_for(:neighborhood, name: nil) }
        expect(response).to render_template(:edit)
      end
    end
  end

  describe 'DELETE #destroy' do
    before do
      @neighborhood = create(:neighborhood)
    end

    it 'deletes the neighborhood' do
      expect {
        process :destroy, method: :delete, params: { id: @neighborhood.id }
      }.to change(Neighborhood, :count).by(-1)
    end

    it 'renders the index view' do
      process :destroy, method: :delete, params: { id: @neighborhood.id }
      expect(response).to redirect_to(admin_neighborhoods_path)
    end
  end
end
