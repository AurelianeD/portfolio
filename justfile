dev:
	npm run dev

build:
  docker build . -t registry.peauc.dev/aurelianed/portfolio --platform linux/amd64

push: build
  docker push registry.peauc.dev/aurelianed/portfolio
