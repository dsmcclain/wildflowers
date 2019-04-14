class SightingsController < ApplicationController
  def create
    @flower = Flower.find(params[:flower_id])
    @sighting = @flower.sightings.create(sighting_params)
    redirect_to flower_path(@flower)
  end

  private

  def sighting_params
    params.require(:sighting).permit(:hiker, :day, :comment)
  end
end
