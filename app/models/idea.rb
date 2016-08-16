class Idea < ActiveRecord::Base
  enum quality: %w(Swill Plausible Genius)

end
