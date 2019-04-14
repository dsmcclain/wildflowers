class SightingsController < ApplicationController
  def create
    @flower = Flower.find(params[:flower_id])
    @sighting = @flower.sightings.create(sighting_params)
    redirect_to flower_path(@flower)
  end

  def destroy
    @flower = Flower.find(params[:flower_id])
    @sighting = @flower.sightings.find(params[:id])
    @sighting.destroy
    redirect_to flower_path(@flower)
  end

  private

  def sighting_params
    params.require(:sighting).permit(:hiker, :day, :comment)
  end
end
