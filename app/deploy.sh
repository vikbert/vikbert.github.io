#!/usr/bin/env sh
set -e

readonly GIT_REPO=https://github.com/vikbert/vikbert.github.io.git

npm run export
\cp -r ./__sapper__/export/* ../
cd ..

rm -rf node_modules

git add -A
DATE=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "deploy: $DATE"
git push -f
cd -
