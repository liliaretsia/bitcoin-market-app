FROM php:7.2-cli

RUN apt-get update

RUN apt-get install libcurl3-dev curl -y
RUN docker-php-ext-install curl

RUN docker-php-ext-install pdo pdo_mysql

WORKDIR /var/www
