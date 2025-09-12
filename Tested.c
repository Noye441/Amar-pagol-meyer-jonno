#include <stdbool.h>

bool verify_matrix(int x, int y, int **matrix)
{
    if (x != y) {
        return false;
    }

    int row = 0;
    while (row < y) {
        int col = 1;
        while (col < x) {
            if (matrix[row][col] < matrix[row][col - 1]) {
                return false;
            }
            col = col + 1;
        }
        row = row + 1;
    }

    int r = 1;
    while (r < y) {
        if (matrix[r][0] < matrix[r - 1][0]) {
            return false;
        }
        r = r + 1;
    }

    return true;
}

sorted 

#include <stdbool.h>
#include "sort.h"

bool test_sort()
{
    int ok = 1;

    int testarray1[] = {3, 2, 1, 0};
    cse_sort(testarray1);
    int i = 1;
    while (testarray1[i] != 0) {
        if (testarray1[i] < testarray1[i - 1]) {
            ok = 0;
        }
        i = i + 1;
    }

    int testarray2[] = {1, 2, 3, 0};
    cse_sort(testarray2);
    i = 1;
    while (testarray2[i] != 0) {
        if (testarray2[i] < testarray2[i - 1]) {
            ok = 0;
        }
        i = i + 1;
    }

    int testarray3[] = {5, -1, 4, 0};
    cse_sort(testarray3);
    i = 1;
    while (testarray3[i] != 0) {
        if (testarray3[i] < testarray3[i - 1]) {
            ok = 0;
        }
        i = i + 1;
    }

    if (ok) {
        return true;
    } else {
        return false;
    }
}
