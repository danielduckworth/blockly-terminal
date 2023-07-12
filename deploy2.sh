git checkout --orphan gh-pages
# copy your folder content
git add .
git commit -m "gh-pages branch dist folder"
git push -u origin gh-pages

git checkout main
git submodule add -b gh-pages -- https://github.com/danielduckworth/blockly-terminal dist
git commit -m "Add gh-pages branch as submodule"
git push
