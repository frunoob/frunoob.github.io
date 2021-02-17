git add -A
git commit -m "by frunoob"
git push hexo-blog master
npx hexo clean&&npx hexo g -d 2> ./error-log.txt
pause
