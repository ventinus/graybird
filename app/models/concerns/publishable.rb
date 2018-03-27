module Publishable

  extend ActiveSupport::Concern
  extend ActiveSupport::Callbacks

  included do
    scope :published,   -> { where.not(published_at: nil) }
    scope :unpublished, -> { where(published_at: nil) }
  end

  def is_published?
    self.published_at != nil
  end

  def publish
    # self.published!
    self.published_at = Time.zone.now if self.respond_to? :published_at
    self.save
  end

  def unpublish
    # self.unpublished!
    self.published_at = nil if self.respond_to? :published_at
    self.save
  end

  def publish_date
    published_at.strftime('%B %e, %Y') if published_at
  end

  # Can overwrite to provide publishing validation
  def valid_to_publish
    self.valid?
  end

  def valid_to_unpublish
    self.valid?
  end

  def valid_to_destroy
    !self.is_published?
  end
end
