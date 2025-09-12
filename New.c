#include <stdbool.h>
#include "sort.h"

bool test_sort() {
    int a1[] = {3, 2, 1, 0};
    cse_sort(a1);
    if (a1[0] != 1 || a1[1] != 2 || a1[2] != 3 || a1[3] != 0) {
        return false;
    }

    int a2[] = {5, 4, 3, 2, 1, 0};
    cse_sort(a2);
    for (int i = 0; i < 4; i++) {
        if (a2[i] > a2[i + 1]) {
            return false;
        }
    }
    if (a2[5] != 0) {   /* check delimiter */
        return false;
    }

    int a3[] = {0};  /* edge case */
    cse_sort(a3);
    if (a3[0] != 0) {
        return false;
    }

    return true;
}
