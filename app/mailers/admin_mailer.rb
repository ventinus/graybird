class AdminMailer < ActionMailer::Base
  default from: '"GrayBird.com" <ella@livingroomre.com>',
          reply_to: 'ella@livingroomre.com'

  # to notify a client of that their signup was received and we'll be in touch shortly
  def signup(client)
    @client = client
    mail subject: 'Someone wants info!', to: 'ella@livingroomre.com'
  end
end
