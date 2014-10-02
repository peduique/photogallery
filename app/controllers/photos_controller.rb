class PhotosController < ApplicationController

	def view
		@photos = Photo.all
	end

	def index
		respond_to do |format|
			format.html { 
				@photos = Photo.all
			}
			format.json {
				@photos = Photo.all
				render json: @photos
			}
		end
	end

	def new
		@photo = Photo.new
	end

	def create
		@photo = Photo.new(photo_params)
		if @photo.save
			flash[:notice] = "Imagem criada com sucesso."
			redirect_to photos_path
		else
			render :action => "new"
		end
	end

	def edit
		@photo = Photo.find(params[:id])
	end

	def update
		@photo = Photo.find(params[:id])
		if @photo.update(photo_params)
			flash[:notice] = "Imagem atualizada com sucesso"
			redirect_to photos_path
		end
	end

	private
		def photo_params   
			params.require(:photo).permit(:title, :url, :photo)
		end

end
