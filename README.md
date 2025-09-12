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
