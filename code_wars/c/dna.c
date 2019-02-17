#include <stdlib.h>
#include <string.h>
#include <stdio.h>

char *dna_to_rna(const char *dna);

char *dnaX[] = {
        "TTTT",
        "GCAT",
        "GACCGCCGCC"
    };

int main(void) {
    // for (size_t j = 0; j < 3; j++) {
        char x =  *dna_to_rna("UUUU");
        printf("%c\n", x);




   return x;
}

char *dna_to_rna(const char *dna)
{
    static char arr[6] = "";
    for (size_t i = 0; i < strlen(dna); i++) {
        if(dna[i] == 'T'){
            char dest[strlen(&dna[i]) + 1];
            strcpy(dest,&dna[i]);
            char src[] = "U";
            arr[i] = *src;

        } else if(dna[i] == 'U') {
            char dest[strlen(&dna[i]) + 1];
            strcpy(dest,&dna[i]);
            char src[] = "T";
            arr[i] = *src;
        } else {
            arr[i] = dna[i];
        }
    }
    // printf("%s\n", arr); 
    return arr;
}

// int main () {
//    char dest[] = "oldstring";
//    const char src[]  = "newstring";
//
//    printf("Before memmove dest = %s, src = %s\n", dest, src);
//    memmove(dest, src, 9);
//    printf("After memmove dest = %s, src = %s\n", dest, src);
//
//    return(0);
// }
