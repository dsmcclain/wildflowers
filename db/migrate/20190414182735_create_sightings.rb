class CreateSightings < ActiveRecord::Migration[5.2]
  def change
    create_table :sightings do |t|
      t.string :hiker
      t.date :day
      t.text :comment
      t.references :flower, foreign_key: true

      t.timestamps
    end
  end
end
