# frozen_string_literal: true
require 'rails_helper'

RSpec.describe Admin::ListingsController, type: :controller do
  let (:administrator) { create :administrator }

  before do
    sign_in administrator
  end

  describe 'GET #index' do
    it 'populates an array of listings' do
      listings_list = create_list(:listing, 3)
      process :index, method: :get
      expect(assigns(:listings)).to match_array(listings_list)
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
      @listing = create(:listing)
    end

    it 'loads the edit view' do
      process :edit, method: :get, params: { id: @listing }
      expect(response).to render_template(:edit)
    end

    it 'loads successfully with an HTTP 200 status code' do
      process :edit, method: :get, params: { id: @listing }

      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it 'loads the right listing' do
      process :edit, method: :get, params: { id: @listing }

      expect(assigns(:listing)).to eq(@listing)
    end
  end

  describe 'POST #create' do
    context 'with valid parameters' do
      it 'creates a listing' do
        # binding.pry
        expect {
          process :create, method: :post, params: { listing: attributes_for(:listing) }
        }.to change(Listing, :count).by(1)
      end

      it 'redirects to the index view' do
        process :create, method: :post, params: { listing: attributes_for(:listing) }
        expect(response).to redirect_to(admin_listings_path)
      end
    end

    context 'with invalid parameters' do
      it 'does not create a listing' do
        expect {
          process :create, method: :post, params: { listing: attributes_for(:listing, property_type: nil) }
        }.to_not change(Listing, :count)
      end

      it 'renders the new view' do
        process :create, method: :post, params: { listing: attributes_for(:listing, property_type: nil) }
        expect(response).to render_template(:new)
      end
    end
  end

  describe 'PUT #update' do
    before do
      @listing = create(:listing)
    end

    context 'with valid parameters' do
      it 'updates the listing' do
        process :update, method: :put, params: { id: @listing.id, listing: attributes_for(:listing, city: 'The Verge') }

        @listing.reload
        expect(assigns(:listing)).to eq(@listing)
      end

      it 'redirects to the listings index path' do
        process :update, method: :put, params: { id: @listing.id, listing: attributes_for(:listing, city: 'The Verge') }

        expect(response).to redirect_to(admin_listings_path)
      end
    end

    context 'with invalid parameters' do
      it 'does not update the listing' do
        city = @listing.city
        process :update, method: :put, params: { id: @listing.id, listing: attributes_for(:listing, city: nil) }

        @listing.reload
        expect(@listing.city).to eq(city)
        expect(assigns(:listing)).to eq(@listing)
      end

      it 'renders the edit view' do
        process :update, method: :put, params: { id: @listing.id, listing: attributes_for(:listing, city: nil) }
        expect(response).to render_template(:edit)
      end
    end
  end

  describe 'DELETE #destroy' do
    before do
      @listing = create(:listing)
    end

    it 'deletes the listing' do
      expect {
        process :destroy, method: :delete, params: { id: @listing.id }
      }.to change(Listing, :count).by(-1)
    end

    it 'renders the index view' do
      process :destroy, method: :delete, params: { id: @listing.id }
      expect(response).to redirect_to(admin_listings_path)
    end
  end
end
