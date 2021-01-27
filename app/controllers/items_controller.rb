class ItemsController < ApplicationController

  def index
    # 初期表示のセレクトボックスに入れておくべき値
    @categories=Category.roots
  end

  def get_category
     selected_category=Category.find(params[:category_id])
     @categories=selected_category.children
  end
end


