gcc -c -std=c99 -Wall -Iheaders application/print.c -o application/print.o
gcc -std=c99 -Wall -Iheaders application/runner.o application/print.o sorts/bubble.o -o app

