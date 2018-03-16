# frozen_string_literal: true
source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.4'

# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'

# File Uploading
gem 'aws-sdk'
gem 'fastimage'
gem 'image_processing'
gem 'mini_magick'
gem 'roda'
gem 'shrine'

# Forms
gem 'kaminari'
gem 'nested_form'
gem 'simple_form'

# Slugs
gem 'friendly_id', '~> 5.1.0'

# Server
gem 'dalli'
gem 'figaro'
gem 'kgio'
gem 'lograge'
gem 'rack-cache', :require => 'rack/cache'
gem 'puma', '~> 3.7'

# Assets
gem 'bootstrap-sass'
gem 'draper', '3.0.1'
gem 'font-awesome-rails'
gem 'gretel'
gem 'sass-rails', '~> 5.0'
gem 'oj'
gem 'slim-rails'
gem 'acts_as_list'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker'
# See https://github.com/rails/execjs#readme for more supported runtimes
gem 'therubyracer', platforms: :ruby

# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'jquery-rails'
gem 'jquery-ui-rails'
gem 'turbolinks', '~> 5'

# API
gem 'active_model_serializers'

# Documentation
gem 'annotate'

# Auditing
gem 'paper_trail'

# Robots.txt
gem 'roboto'

# Error Tracking
gem 'honeybadger'

# Authentication
gem 'devise'

# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'factory_girl_rails'
  gem 'faker'
  gem 'pry-byebug'
  gem 'pry-rails'
  gem 'rb-readline' # fix for byebug on Mac OSX Sierra
  gem 'rspec-rails'
  gem 'spring'
  gem 'spring-commands-cucumber'
  gem 'spring-commands-rspec'
  gem 'timecop'

  # Adds support for Capybara system testing and selenium driver
  # gem 'selenium-webdriver'
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'bullet'
  gem 'guard-brakeman'
  gem 'guard-cucumber'
  gem 'guard-livereload', require: false
  gem 'guard-rspec', require: false
  gem 'letter_opener'
  gem 'meta_request'
  gem 'rb-fsevent'
  gem 'terminal-notifier-guard'
  gem 'web-console', '>= 3.3.0'
end

group :test do
  gem 'codeclimate-test-reporter', require: nil
  gem 'cucumber-rails', require: false
  gem 'database_cleaner'
  gem 'email_spec'
  gem 'launchy'
  gem 'poltergeist'
  gem 'rails-controller-testing'
  gem 'shoulda-matchers'
  gem 'vcr'
  gem 'webmock'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
