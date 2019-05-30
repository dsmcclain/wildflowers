class SightingsController < ApplicationController

  http_basic_authenticate_with name: "guest", password: "demo", only: :destroy
  def create
    puts Flower.exists?(params[:flower_id])
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
