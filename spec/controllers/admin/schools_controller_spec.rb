# frozen_string_literal: true
require 'rails_helper'

RSpec.describe Admin::SchoolsController, type: :controller do
  let (:school) { @school = create :school }

  before do
    sign_in school
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

    it 'loads an array of schools' do
      schools = create_list(:school, 3)
      process :index, method: :get

      expect(assigns(:schools)).to match_array(schools << @school)
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
    context 'with valid attributes' do
      it 'creates an school' do
        expect {
          process :create, method: :post, params: { school: attributes_for(:school) }
        }.to change(School, :count).by(1)
      end

      it 'redirects to the index view' do
        process :create, method: :post, params: { school: attributes_for(:school) }

        expect(response).to redirect_to(admin_schools_path)
      end
    end

    context 'with invalid attributes' do
      it 'does not create an school' do
        expect {
          process :create, method: :post, params: { school: attributes_for(:school, password: nil) }
        }.to_not change(School, :count)
      end

      it 're-renders the new view' do
        process :create, method: :post, params: { school: attributes_for(:school, password: nil) }

        expect(response).to render_template(:new)
      end
    end
  end

  describe 'PUT #update' do
    before do
      @school = create(:school, password: 'password')
    end

    context 'with valid attributes' do
      it 'updates the school' do
        process :update, method: :put, params: { id: @school, school: attributes_for(:school, first_name: 'Phoenix') }

        @school.reload
        expect(assigns(:school).first_name).to eq('Phoenix')
      end

      it 'redirects to the index view' do
        process :update, method: :put, params: { id: @school, school: attributes_for(:school, first_name: 'Phoenix', current_password: 'password') }

        expect(response).to redirect_to(admin_schools_path)
      end
    end

    context 'with invalid attributes' do
      it 'does not update the school' do
        process :update, method: :put, params: { id: @school, school: attributes_for(:school, first_name: nil) }

        @school.reload
        expect(@school.first_name).to_not eq(nil)
        expect(assigns(:school)).to eq(@school)
      end

      it 're-renders the edit view' do
        process :update, method: :put, params: { id: @school, school: attributes_for(:school, first_name: nil) }

        expect(response).to render_template(:edit)
      end
    end
  end

  describe 'DELETE #destroy' do
    context 'with valid attributes' do
      before do
        @school = create(:school)
      end

      it 'deletes the school' do
        expect {
          process :destroy, method: :delete, params: { id: @school }
        }.to change(School, :count).by(-1)
      end

      it 'redirects to the index view' do
        process :destroy, method: :delete, params: { id: @school }

        expect(response).to redirect_to(admin_schools_path)
      end
    end

    context 'with invalid attributes' do
      it 'does not delete the school' do
        expect {
          process :destroy, method: :delete, params: { id: @school }
        }.to_not change(School, :count)
      end

      it 'redirects to the index view' do
        process :destroy, method: :delete, params: { id: @school }

        expect(response).to redirect_to(admin_schools_path)
      end
    end
  end
end
