class FlowersController < ApplicationController
  def index
    @flowers = Flower.all
  end

  def show
    @flower = Flower.find(params[:id])
  end

  def new
    @flower = Flower.new
  end

  def create
    @flower = Flower.new(flower_params)

    if @flower.save
      redirect_to @flower
    else
      render 'new'
    end
  end

  private

  def flower_params
    params.require(:flower).permit(:name, :description)
  end
end
