#include <stdbool.h>
#include "sort.h"

bool test_sort()
{
    int ok = 1;

    int a1[] = {3, 2, 1, 0};
    cse_sort(a1);
    int i = 1;
    while (a1[i] != 0) {
        if (a1[i] < a1[i - 1]) {
            ok = 0;
        }
        i = i + 1;
    }

    int a2[] = {1, 2, 3, 0};
    cse_sort(a2);
    i = 1;
    while (a2[i] != 0) {
        if (a2[i] < a2[i - 1]) {
            ok = 0;
        }
        i = i + 1;
    }

    int a3[] = {5, -1, 4, 0};
    cse_sort(a3);
    i = 1;
    while (a3[i] != 0) {
        if (a3[i] < a3[i - 1]) {
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
