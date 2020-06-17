DOCKER_IMAGE_NAME ?= travelperk-university-frontend
DOCKER_IMAGE_STORYBOOK_NAME ?= travelperk-university-frontend-storybook
APP_PORT ?= 3000
.DEFAULT_GOAL := help
.PHONY: help


dep: ## Runs linting test to the code.
	yarn install

test: ## Runs project tests.
	yarn test

test-ci: ## Runs project tests.
	CI=True yarn test

run: ## Starts server and listen to port `{APP_PORT}` or `3000`.
	PORT=$(APP_PORT) yarn start

run-storybook: ## Starts storybook and listen to port `9009`.
	yarn storybook

docker-db-clean: ## Builds the docker image with tag `{DOCKER_IMAGE_NAME}` or `travelperk-university-frontend`
	rm -rf .data
	mkdir .data
	cp ./example/db/test.sqlite3 ./.data/db.sqlite3

docker: ## Builds the docker image with tag `{DOCKER_IMAGE_NAME}` or `travelperk-university-frontend`
	docker build -t $(DOCKER_IMAGE_NAME) .

docker-storybook: ## Builds the docker image with tag `{DOCKER_IMAGE_STORYBOOK_NAME}` or `travelperk-university-frontend-storybook`
	docker build -f Dockerfile-storybook -t $(DOCKER_IMAGE_STORYBOOK_NAME) .

docker-push: ## Tags and pushes with the required name:tag `{DOCKER_REMOTE_IMAGE}`.
	docker tag $(DOCKER_IMAGE_NAME) $(DOCKER_REMOTE_IMAGE)
	docker push $(DOCKER_REMOTE_IMAGE)

docker-storybook-push: ## Tags and pushes with the required name:tag `{DOCKER_REMOTE_IMAGE}`.
	docker tag $(DOCKER_IMAGE_NAME) $(DOCKER_IMAGE_STORYBOOK_NAME)
	docker push $(DOCKER_REMOTE_IMAGE)

docker-storybook-run: ## Tags and pushes with the required name:tag `{DOCKER_REMOTE_IMAGE}`.
	docker run --rm -i -p 9009:80 -t $(DOCKER_IMAGE_STORYBOOK_NAME)

# Godly script by: https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html
help: ## Prints this page.
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
