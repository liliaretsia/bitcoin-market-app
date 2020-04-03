#!/bin/sh

set -e

wait_for_mysql()  {
  until mysql -h mysql -u root -e '\q'; do
    echo "Mysql is unavailable - sleeping"
    sleep $1
  done
}

create_db() {
  mysql -hmysql -uroot -e "CREATE DATABASE IF NOT EXISTS ${DB_DATABASE}"
}

migrate_db() {
  php artisan migrate --force
  php artisan db:seed --class=DatabaseSeeder --force
}

start_server() {
  exec php artisan serve --host=0.0.0.0 --port=$1
}

wait_for_mysql 2
echo "mysql was started"
create_db
echo "db was created"
migrate_db
echo "migrations were executed"
start_server 80
echo "dependencies was started"