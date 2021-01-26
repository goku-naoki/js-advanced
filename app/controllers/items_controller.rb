class ItemsController < ApplicationController

  def index
    @categories=Category.roots
  end

  def get_category
     selected_category=Category.find(params[:category_id])
     @categories=selected_category.children
  end
end


