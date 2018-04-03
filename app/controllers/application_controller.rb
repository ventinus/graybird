class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private

  def class_enum_collection(klass, enum)
    klass.send(enum.to_s.pluralize).keys.to_a.map { |key| [key.humanize, key] }
  end

  def enum_collection(instance, enum)
    class_enum_collection(instance.class, enum)
  end
end
