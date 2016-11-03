RSpec.configure do |config|
  config.after(:suite) do
    Shrine.storages[:cache].clear!
    Shrine.storages[:store].clear!
  end
end
