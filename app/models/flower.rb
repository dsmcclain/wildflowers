class Flower < ApplicationRecord
  has_many :sightings
  validates :name, presence: true,
                   length: { minimum: 3 }
end
