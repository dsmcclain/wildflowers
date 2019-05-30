class ChangeSightingsDateToString < ActiveRecord::Migration[5.2]
  def change
    change_column :sightings, :day, :string
  end
end
