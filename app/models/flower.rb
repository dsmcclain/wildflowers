class Flower < ApplicationRecord
  has_many :sightings, dependent: :destroy
  validates :name, presence: true,
                   length: { minimum: 3 }
end
