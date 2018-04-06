class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    # TODO Yet to be written
  end

  def new
    @user = User.new
  end

  def create
    # Bulk assignment with strong parameters
    # params = { user: { first_name: '...', last_name: '...' }}
    permitted_params = params.require(:user).permit(:first_name, :last_name)
    @user = User.new permitted_params
    if @user.save then
      receive_uploaded_file
      redirect_to @user
    else
      # What to do if save is unsuccessful?
      render :new
    end
  end

  def receive_uploaded_file
    uploaded_io = params[:user][:image]
    path = Rails.root.join 'public/images', uploaded_io.original_filename
    File.open(path, 'wb') do |file|
      file.write(uploaded_io.read)
    end
  end
end
