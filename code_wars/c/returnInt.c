#include <stdlib.h>
#include <stdio.h>
#include <string.h>

int* new_int(int num);

int main(void){
        printf("%p\n", new_int(10));
}

int* new_int(int num)
{
    int *p = malloc(sizeof(int));
    return p;
}
