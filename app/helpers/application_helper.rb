# frozen_string_literal: true
module ApplicationHelper
  def title(text)
    content_for :title, text
  end

  def meta_tag(tag, text)
    content_for :"meta_#{tag}", text
  end

  def yield_meta_tag(tag, default_text='')
    content_for?(:"meta_#{tag}") ? content_for(:"meta_#{tag}") : default_text
  end

  def yield_title_tag(default_text = '')
    content_for?(:title) ? content_for(:title) : default_text
  end

  def format_date(datetime)
    datetime.strftime('%m-%d-%Y')
  end

  def text_date(datetime)
    datetime.strftime('%B %-d, %Y')
  end

  def controller_action_name
    "#{controller_path}_#{action_name}".gsub("/", "_")
  end
end
