#!/usr/bin/env sh
set -e

readonly GIT_REPO=https://github.com/vikbert/vikbert.github.io.git

npm run export
mkdir -p gh-pages
cp -rf __sapper__/export/* gh-pages/

# cd gh-pages
# git init
# git add -A

# DATE=$(date '+%Y-%m-%d %H:%M:%S')
# git commit -m "deploy: github gh-pages $DATE"
# git push -f $GIT_REPO master:gh-pages

# cd -
# git pull
# rm -rf gh-pages
