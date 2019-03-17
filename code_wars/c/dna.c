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
        char* dna =  dna_to_rna("GACCGCCGCC");
        printf("%s\n", dna);
//         GCUAUCGUUUCAUCAGCGU
//         GCUAUCGUUUCAUC
//         GCTATCGTTTCATC
           // GCUAUCGUUUCAUC
           // GCUAUCGUUUCAUC
           // GCUAUCGUUUCAUC
}

char* dna_to_rna(const char *dna)
{
  char* pointer = malloc(strlen(dna) +1);
    for (int i = 0; i < strlen(dna); i++) {
        if(dna[i] == 'U'){
            pointer[i] = 'T';
        } else if(dna[i] == 'T'){
            pointer[i] = 'U';
        } else {
            pointer[i] = dna[i];
        }
    }

    pointer[strlen(dna)] = '\0';
    return pointer;
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

// GAGGCGGGG
// GACCGCCGCC
