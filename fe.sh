#!/bin/sh

set -e

install_fe_dependencies() {
  npm install
  npm run dev
}

install_fe_dependencies
echo "dependencies were installed"