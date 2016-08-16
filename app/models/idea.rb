class Idea < ActiveRecord::Base
  enum quality: %w(Swill Plausible Genius)

  validates :title, presence: true
  validates :body, presence: true
  
end
