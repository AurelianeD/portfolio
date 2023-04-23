dev:
	npm run dev

build:
  docker build . -t registry.peauc.dev/aurelianed/portfolio --platform linux/amd64

push:
  docker push registry.peauc.dev/aurelianed/portfolio

deploy:
  http POST https://portainer.peauc.dev/api/webhooks/8a200040-98c5-4d7f-bd30-17d21ae566fb

build-push: build push
  @echo "done"

build-push-deploy: build-push deploy
  @echo "deploy done visit aureliane.dev"
