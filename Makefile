run:
	gem install bundler
	bundle install

	rake db:create
	rake db:migrate

	rails s