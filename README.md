# Step 1: runner.o
../objects/runner.o: runner.c ../headers/sort.h ../headers/print.h
	gcc -c -std=c99 -Wall -I../headers -o ../objects/runner.o runner.c

# Step 2: print.o
../objects/print.o: print.c ../headers/print.h
	gcc -c -std=c99 -Wall -I../headers -o ../objects/print.o print.c

# Step 3: bubble.o
../objects/bubble.o: ../sorts/bubble.c ../headers/sort.h
	gcc -c -std=c99 -Wall -I../headers -o ../objects/bubble.o ../sorts/bubble.c

# Step 4: bubble-runner
bubble-runner: ../objects/runner.o ../objects/print.o ../objects/bubble.o
	gcc -std=c99 -Wall -I../headers ../objects/runner.o ../objects/print.o ../objects/bubble.o -o bubble-runner

