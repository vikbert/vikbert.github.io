mkdir -p gh-pages
cp -rf src/* gh-pages
cd gh-pages

git init
git add -A

DATE=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "deploy: github gh-pages $DATE"

git push -f https://github.com/vikbert/vikbert.github.io.git master:gh-pages

cd -
git pull
rm -rf gh-pages
