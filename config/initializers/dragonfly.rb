require 'dragonfly'
require 'dragonfly-s3_data_store'

# Configure
Dragonfly.app.configure do
  plugin :imagemagick

  secret "efbbbfdab43046e2ae593d84a9c20808dd7c55d35f072d27c1b34165fa1d4f2d"

  url_format "/media/:job/:name"

  if Rails.env.test? or Rails.env.development?
    datastore :file,
      root_path: Rails.root.join('public/system/dragonfly', Rails.env),
      server_root: Rails.root.join('public'),
      fog_storage_options: { path_style: true }
  else
    datastore :s3,
      bucket_name: ENV['S3_BUCKET_NAME'],
      access_key_id: ENV['AWS_ACCESS_KEY'],
      secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
      fog_storage_options: { path_style: true }
  end
end

# Logger
Dragonfly.logger = Rails.logger

# Mount as middleware
Rails.application.middleware.use Dragonfly::Middleware

# Add model functionality
if defined?(ActiveRecord::Base)
  ActiveRecord::Base.extend Dragonfly::Model
  ActiveRecord::Base.extend Dragonfly::Model::Validations
end
