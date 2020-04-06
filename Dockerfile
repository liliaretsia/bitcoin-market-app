FROM php:7.2-fpm
WORKDIR /app
COPY . .
RUN apt-get update -y && apt-get install -y openssl zip unzip git npm mariadb-client libonig-dev && \
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && \
    docker-php-ext-install pdo_mysql && \
    composer install && \
    php artisan key:generate && php artisan config:cache
ENTRYPOINT ["./init.sh"]