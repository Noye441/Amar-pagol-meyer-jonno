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
