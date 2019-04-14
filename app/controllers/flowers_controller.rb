class FlowersController < ApplicationController
  def show
    @flower = Flower.find(params[:id])
  end
  
  def new
  end

  def create
    @flower = Flower.new(flower_params)

    @flower.save
    redirect_to @flower
  end

  private

  def flower_params
    params.require(:flower).permit(:name, :description)
  end
end
