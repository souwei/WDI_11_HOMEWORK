
class Api::CardsController < ApplicationController

  def index
    render json: Card.all
  end

  def destroy
    card = Card.find(params[:id])
    if card.destroy
      render json: card
    else
      render json: card.errors
    end
  end


  def create
  #  render json: {hi: 'there'}

    card = Card.new
    card.name = params[:name]
    card.image_url = params[:image_url]
    if card.save
      render json: card
    else
      render json: card.errors
    end
  end


  def edit
    card = Card.find(params[:id])
    if card
      render json: card
    else
      render json: card.errors
    end
  end



  def update
    card = Card.find(params[:id])

    card.name = params[:name]
    card.image_url = params[:image_url]
    if card.save
      render json: Card.all
    else
      render json: card.errors
    end

  end

end