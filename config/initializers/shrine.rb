# frozen_string_literal: true
require "shrine"
require "shrine/storage/file_system"
require "shrine/storage/s3"

Shrine.plugin :activerecord
Shrine.plugin :cached_attachment_data # for forms
Shrine.plugin :direct_upload
Shrine.plugin :determine_mime_type

if Rails.env.test?
  Shrine.storages = {
    cache: Shrine::Storage::FileSystem.new("spec", prefix: "temp/uploads/cache"),
    store: Shrine::Storage::FileSystem.new("spec", prefix: "temp/uploads/store"),
  }
# elsif Rails.env.staging? || Rails.env.production?
  # default_options = { public: true, host: ENV['AWS_CLOUDFRONT_DISTRIBUTION'], version: :original }
  # Shrine.plugin :default_url_options, store: default_options, cache: default_options
  #
  # s3_options = {
  #   region:            'us-west-2',
  #   access_key_id:     ENV['AWS_ACCESS_KEY'],
  #   secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
  #   bucket:            ENV['S3_BUCKET_NAME'],
  #   upload_options:    { acl: 'public-read' }
  # }
  #
  # Shrine.storages = {
  #   cache: Shrine::Storage::S3.new(prefix: "cache", **s3_options),
  #   store: Shrine::Storage::S3.new(prefix: "store", **s3_options)
  # }
else
  Shrine.storages = {
    cache: Shrine::Storage::FileSystem.new('public', prefix: "uploads/cache"), # temporary
    store: Shrine::Storage::FileSystem.new('public', prefix: "uploads/store"), # permanent
  }
end

class RedactorUploaderMiddleware
  def initialize(app)
    @app = app
  end

  def call(env)
    result = @app.call(env)

    if result[0] == 200 && env["PATH_INFO"].end_with?("upload")
      redactor_image = RedactorImage.new(image: result[2].first)

      if redactor_image.save
        # response
        result[0] = 201
        # data
        result[2] = [{ id: redactor_image.image.id, url: redactor_image.image_url(public: true) }.to_json]

      else
        result[0] = 500
      end
    end

    result
  end
end

Shrine::UploadEndpoint.use RedactorUploaderMiddleware
