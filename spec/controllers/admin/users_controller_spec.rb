# frozen_string_literal: true
require 'rails_helper'

RSpec.describe Admin::UsersController, type: :controller do
  let (:administrator) { create :administrator }

  before do
    sign_in administrator
  end

  describe 'GET #index' do
    it 'populates an array of users' do
      users_list = create_list(:user, 3)
      process :index, method: :get
      expect(assigns(:users)).to match_array(users_list)
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
      @user = create(:user)
    end

    it 'loads the edit view' do
      process :edit, method: :get, params: { id: @user }
      expect(response).to render_template(:edit)
    end

    it 'loads successfully with an HTTP 200 status code' do
      process :edit, method: :get, params: { id: @user }

      expect(response).to be_success
      expect(response).to have_http_status(200)
    end

    it 'loads the right user' do
      process :edit, method: :get, params: { id: @user }

      expect(assigns(:user)).to eq(@user)
    end
  end

  describe 'POST #create' do
    context 'with valid parameters' do
      it 'creates a user' do
        expect {
          process :create, method: :post, params: { user: attributes_for(:user) }
        }.to change(User, :count).by(1)
      end

      it 'redirects to the index view' do
        process :create, method: :post, params: { user: attributes_for(:user) }
        expect(response).to redirect_to(admin_users_path)
      end
    end

    # context 'with invalid parameters' do
    #   it 'does not create a user' do
    #     expect {
    #       process :create, method: :post, params: { user: attributes_for(:user, first_name: nil) }
    #     }.to_not change(User, :count)
    #   end

    #   it 'renders the new view' do
    #     process :create, method: :post, params: { user: attributes_for(:user, first_name: nil) }
    #     expect(response).to render_template(:new)
    #   end
    # end
  end

  describe 'PUT #update' do
    before do
      @user = create(:user)
    end

    context 'with valid parameters' do
      it 'updates the user' do
        process :update, method: :put, params: { id: @user.id, user: attributes_for(:user, first_name: 'The Verge') }

        @user.reload
        expect(assigns(:user)).to eq(@user)
      end

      it 'redirects to the users index path' do
        process :update, method: :put, params: { id: @user.id, user: attributes_for(:user, first_name: 'The Verge') }

        expect(response).to redirect_to(admin_users_path)
      end
    end

    # context 'with invalid parameters' do
    #   it 'does not update the user' do
    #     name = @user.name
    #     process :update, method: :put, params: { id: @user.id, user: attributes_for(:user, first_name: nil) }

    #     @user.reload
    #     expect(@user.name).to eq(name)
    #     expect(assigns(:user)).to eq(@user)
    #   end

    #   it 'renders the edit view' do
    #     process :update, method: :put, params: { id: @user.id, user: attributes_for(:user, first_name: nil) }
    #     expect(response).to render_template(:edit)
    #   end
    # end
  end

  describe 'DELETE #destroy' do
    before do
      @user = create(:user)
    end

    it 'deletes the user' do
      expect {
        process :destroy, method: :delete, params: { id: @user.id }
      }.to change(User, :count).by(-1)
    end

    it 'renders the index view' do
      process :destroy, method: :delete, params: { id: @user.id }
      expect(response).to redirect_to(admin_users_path)
    end
  end
end
