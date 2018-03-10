# frozen_string_literal: true
require 'rails_helper'

RSpec.describe Admin::SchoolsController, type: :controller do
  let (:administrator) { create :administrator }

  before do
    sign_in administrator
  end

  describe 'GET #index' do
    it 'populates an array of schools' do
      schools_list = create_list(:school, 3)
      process :index, method: :get
      expect(assigns(:schools)).to match_array(schools_list)
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
      @school = create(:school)
    end

    it 'loads the edit view' do
      process :edit, method: :get, params: { id: @school }
      expect(response).to render_template(:edit)
    end

    it 'loads successfully with an HTTP 200 status code' do
      process :edit, method: :get, params: { id: @school }

      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it 'loads the right school' do
      process :edit, method: :get, params: { id: @school }

      expect(assigns(:school)).to eq(@school)
    end
  end

  describe 'POST #create' do
    context 'with valid parameters' do
      it 'creates a school' do
        expect {
          process :create, method: :post, params: { school: attributes_for(:school) }
        }.to change(School, :count).by(1)
      end

      it 'redirects to the index view' do
        process :create, method: :post, params: { school: attributes_for(:school) }
        expect(response).to redirect_to(admin_schools_path)
      end
    end

    context 'with invalid parameters' do
      it 'does not create a school' do
        expect {
          process :create, method: :post, params: { school: attributes_for(:school, name: nil) }
        }.to_not change(School, :count)
      end

      it 'renders the new view' do
        process :create, method: :post, params: { school: attributes_for(:school, name: nil) }
        expect(response).to render_template(:new)
      end
    end
  end

  describe 'PUT #update' do
    before do
      @school = create(:school)
    end

    context 'with valid parameters' do
      it 'updates the school' do
        process :update, method: :put, params: { id: @school.id, school: attributes_for(:school, name: 'The Verge') }

        @school.reload
        expect(assigns(:school)).to eq(@school)
      end

      it 'redirects to the schools index path' do
        process :update, method: :put, params: { id: @school.id, school: attributes_for(:school, name: 'The Verge') }

        expect(response).to redirect_to(admin_schools_path)
      end
    end

    context 'with invalid parameters' do
      it 'does not update the school' do
        name = @school.name
        process :update, method: :put, params: { id: @school.id, school: attributes_for(:school, name: nil) }

        @school.reload
        expect(@school.name).to eq(name)
        expect(assigns(:school)).to eq(@school)
      end

      it 'renders the edit view' do
        process :update, method: :put, params: { id: @school.id, school: attributes_for(:school, name: nil) }
        expect(response).to render_template(:edit)
      end
    end
  end

  describe 'DELETE #destroy' do
    before do
      @school = create(:school)
    end

    it 'deletes the school' do
      expect {
        process :destroy, method: :delete, params: { id: @school.id }
      }.to change(School, :count).by(-1)
    end

    it 'renders the index view' do
      process :destroy, method: :delete, params: { id: @school.id }
      expect(response).to redirect_to(admin_schools_path)
    end
  end
end
