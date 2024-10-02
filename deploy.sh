rm -rf dist
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:khoang-dev/khoang-dev.github.io.git master:deploy

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/khoang-dev/portfolio.git master:deploy

cd -