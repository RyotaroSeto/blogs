# docker-composeコマンド
up:
	docker-compose up -d
build:
	docker-compose up -d --build
down:
	docker-compose down
restart:
	docker-compose down
	docker-compose up -d --build
dev:
	docker-compose exec frontend npm run dev
npmbuild:
	docker-compose exec frontend npm run build
updev:
	docker-compose up -d
	docker-compose exec frontend npm run dev
builddev:
	docker-compose up -d --build
	docker-compose exec frontend npm run dev

# nuxtの導入(ファイルの追記あり)
nuxt:
	npx create-nuxt-app frontend
	cp .env.example .env
	docker-compose up -d --build
	docker-compose exec front npm install --save @nuxtjs/proxy @nuxtjs/dotenv @nuxtjs/axios
	docker-compose exec front touch .env
# docker-compose exec front npm install sass-loader@10.1.1 node-sass --save-dev
nuxtjs:
	docker-compose exec front npm install --save @nuxtjs/axios
front:
	docker exec -it blogs_front_1 ash
laravel:
	docker exec -it blogs_app_1 bash
# backend
backend:
	docker-compose exec app composer install
	docker-compose exec app cp .env.example .env
	docker-compose exec app php artisan key:generate
	docker-compose exec app php artisan migrate

# typescriptの導入(ファイルの追記あり)
typescript:
	docker-compose exec front npm install --save-dev @nuxt/types
	docker-compose exec front touch shims-vue.d.ts

# composition-apiの導入(ファイルの追記あり)
composition-api:
	docker-compose exec front npm install @nuxtjs/composition-api --save
