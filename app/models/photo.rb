class Photo < ActiveRecord::Base

	validates_presence_of :title

	has_attached_file :photo,
		:path => ":rails_root/public/system/:class/:attachement/:id/:basename_:style.:extension",
		:url => "/system/:class/:attachement/:id/:basename_:style.:extension",
		:styles => { 
			:banner => "640x480#",
			:thumb => "100x100>"
		},
		:default_url => "/images/:style/missing.png"


	validates_attachment :photo,
		:presence => true,
		:size => { :in => 0..10.megabytes },
		:content_type => { :content_type => /^image\/(jpeg|png|gif|tiff)$/ }

end
