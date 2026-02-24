YELLOW := $(shell tput -Txterm setaf 3)
GREEN  := $(shell tput -Txterm setaf 2)

DC = docker compose -f docker-compose.yaml

# Docker commands
docker\:watch:
	make docker:clean

	@echo "$(YELLOW)[Docker]:[Watch] Starting watch mode"
	$(DC) watch

docker\:clean:
	@echo "$(YELLOW)[Docker]:[Clean] Removing all containers"
	docker stop $$(docker ps -aq) 2>/dev/null || true
	docker rm $$(docker ps -aq) 2>/dev/null || true

	@echo "$(YELLOW)[Docker]:[Clean] Removing all images"
	docker rmi -f $$(docker images -aq) 2>/dev/null || true

	@echo "$(YELLOW)[Docker]:[Clean] Removing all volumes"
	docker volume rm $$(docker volume ls -q) 2>/dev/null || true

	@echo "$(YELLOW)[Docker]:[Clean] Removing all networks"
	docker network prune -f

	@echo "$(YELLOW)[Docker]:[Clean] Removing build cache"
	docker builder prune -a -f

	@echo "$(YELLOW)[Docker]:[Clean] Final system prune"
	docker system prune -a --volumes -f

	@echo "$(GREEN)[Docker]:[Clean] Done! Docker is fresh and clean [Success]"