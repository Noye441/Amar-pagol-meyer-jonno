scptaeefmia@emon.cse.buffalo.edu:/home/csdue/taeefmia/lab01-github-Noye441/submission.tar .

cd application
gcc -c -std=c99 -Wall -I../headers print.c
gcc -c -std=c99 -Wall -I../headers runner.c
cd ..
# verify:
ls -1F application
# expect: README.md  print.c  print.o  runner.c  runner.o
