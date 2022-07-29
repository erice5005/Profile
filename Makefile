build:
	docker build . -t profile-site
	docker tag profile-site:latest registry.digitalocean.com/ricedevcontainers/profile-site:display
	docker push registry.digitalocean.com/ricedevcontainers/profile-site:display