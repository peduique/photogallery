class PhotosController < ApplicationController

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

end
