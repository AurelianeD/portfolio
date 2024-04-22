dev:
	npm run dev

dockerBuild:
  docker build . -t registry.peauc.dev/aurelianed/portfolio --platform linux/amd64

push:
  docker push registry.peauc.dev/aurelianed/portfolio

deploy:
  http POST https://portainer.peauc.dev/api/webhooks/036d3146-3dbc-4453-bf0f-954090ed9866

build-push: dockerBuild push
  @echo "done"

build-push-deploy: build-push deploy
  @echo "deploy done visit aureliane.dev"

build:
	npm run build

preview:
	npm run preview

build-preview: build preview
