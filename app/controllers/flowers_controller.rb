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

  def edit
    @flower = Flower.find(params[:id])
  end

  def create
    @flower = Flower.new(flower_params)

    if @flower.save
      redirect_to @flower
    else
      render 'new'
    end
  end

  def update
    @flower = Flower.find(params[:id])

    if @flower.update(flower_params)
      redirect_to @flower
    else
      render 'edit'
    end
  end

  def destroy
    @flower = Flower.find(params[:id])
    @flower.destroy

    redirect_to flowers_path
  end

  private

  def flower_params
    params.require(:flower).permit(:name, :description)
  end
end
