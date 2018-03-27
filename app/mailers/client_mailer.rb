class ClientMailer < ActionMailer::Base
  default from: '"Ella Gray" <ella@livingroomre.com>',
          reply_to: 'ella@livingroomre.com'

  # to notify a client of that their signup was received and we'll be in touch shortly
  def signup
    mail(
      subject: 'Hello from Postmark',
      to: 'jgray@canvasunited.com',
      from: 'jgray@canvasunited.com',
      html_body: '<strong>Hello</strong> dear Postmark user.',
      track_opens: 'true')
  end
end
