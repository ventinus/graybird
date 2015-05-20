require 'email_spec'

RSpec.configure do |config|
  config.include EmailSpec::Helpers, [type: :mailer, type: :feature, type: :job]
  config.include EmailSpec::Matchers, [type: :mailer, type: :feature, type: :job]

  config.before(:each) do
    reset_mailer # Clears out ActionMailer::Base.deliveries
  end

end
