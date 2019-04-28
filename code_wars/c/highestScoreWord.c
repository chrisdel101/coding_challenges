#include <stdlib.h>
#include <stdio.h>
#include <string.h>

char *highestScoringWord(const char *str);
int main(void) {
    char *res = highestScoringWord("b");
    free(res);
    // printf("RES: %s\n", res);
}

/*
** @param str: a C-string containing only lowercase letters and spaces (' ')
** @return:    a C-string allocated on the heap containing the highest scoring word of str
*/
char  *highestScoringWord(const char *str)
{
    int currentScore = 0;
    int highScore = 0;
    int currentLen = 0;
    int highestLen = 0;
    char currentWord[100];
    char highestWord[100];
    int k = 0;
    char *mem;
    char tempCurrent[100];
    for (size_t i = 0; i < strlen(str); i++) {
        mem = malloc(k+1);
        if(str[i] != ' '){
            // printf("str i%c\n", str[i]);
            int convert = str[i] - 97 + 1;
            currentScore += convert;
            currentLen++;
            tempCurrent[k] = str[i];
            printf("temp %c\n", tempCurrent[k]);
            // strcpy(currentWord, tempCurrent);
            printf("k: %i\n", k);
            printf("highScore: %i\n", highScore);
            printf("currentScore: %i\n", currentScore);
            // if current score higher than last, assign new
            k++;
        }

        if(str[i] == ' ' && currentScore > highScore){
            puts("SPACE");
            tempCurrent[strlen(tempCurrent) + 1] = '\0';
            // for (size_t p= 0; p < strlen(tempCurrent); p++) {
            //     printf("MID TEMP%c\n", tempCurrent[p]);
            // }
            // reset mem on highest word
            memset(highestWord, 0, sizeof(int));
            // puts("set highest word");
            printf("set highest word: %s\n", highestWord);
            strcpy(highestWord, tempCurrent);
            printf("set highest word: %s\n", highestWord);

            // set high score to current
            highScore = currentScore;
            printf("high score: %i\n", highScore);
            // reset current score
            currentScore = 0;
            // set highest len to current
            highestLen = currentLen;
            // reset current len
            currentLen = 0;
            k = 0;
            // set highest word to current word
            // printf("current to set: %s\n", currentWord);
            // printf("high word reset: %s\n",  highestWord);
            // memset(highestWord, 0, sizeof(char));
            // strcpy(highestWord, currentWord);
            // printf("high word reset: %s\n", highestWord);
            // reset current mem
            // printf("CURRENT WORD TOP %s\n", currentWord);

            memset(tempCurrent, 0, sizeof(tempCurrent));
            for (size_t p= 0; p < 4; p++) {
                printf("TEMP check empty: %c\n ", tempCurrent[p]);
            }
            // free(currentWord);
            // currentWord = malloc(sizeof(char) * currentLen);
            // printf("CURRENT WORD TOP %s\n", currentWord);

        } else if(str[i] == ' ' && currentScore <= highScore) {
            puts("LAST");
            for (size_t p= 0; p < 4; p++) {
                printf("BOTTOM TEMP%c\n", tempCurrent[p]);
            }
            // printf("high score bottom: %i\n", );
            printf("high score bottom: %i\n", highScore);
            // printf("high: %s\n", highestWord);

            currentScore = 0;
            currentLen = 0;
            puts("reset current word mem");
            // highestWord = currentWord;
            memset(tempCurrent, 0, sizeof(tempCurrent));
            // memset(currentWord, 0, sizeof(char));
            printf("CURRENT high word %s\n", highestWord);
            k = 0;
            for (size_t p= 0; p < 4; p++) {
                printf("TEMP check empty: %c\n ", tempCurrent[p]);
            }
            // currentWord = NULL;
            // currentWord = malloc(sizeof(char) * currentLen);
        }
        // at end of string, last is the longest
        if((i + 1) == strlen(str) && currentScore > highScore){
            puts("HERE");
            highScore = currentScore;
            strcpy(highestWord, tempCurrent);
            printf("K %i\n", k);
            printf("len %i\n", strlen(highestWord));

            for (size_t m = 0; m < k; m++) {
                printf("%c",highestWord[m] );
                mem[m] = highestWord[m];
            }

            // printf("\n");
            return mem;
        }
    }
    for (size_t i = 0; i < strlen(highestWord); i++) {
        mem[i] = highestWord[i];
    }
    printf("%s\n",highestWord );
    return mem;
}





//
// char *highestScoringWord(const char *str)
// {
//     int currentScore = 0;
//     int highScore = 0;
//     int currentLen = 0;
//     int highestLen = 0;
//     char currentWord[100];
//     char highestWord[100];
//     int k = 0;
//     char *mem;
//     char tempCurrent[100];
//     for (size_t i = 0; i < strlen(str); i++) {
//         mem = malloc(k+1);
//     // for (size_t i = 0, k = 0; i < 6; i++) {
//         if(str[i] != ' '){
//             // printf("str i%c\n", str[i]);
//             int convert = str[i] - 97 + 1;
//             currentScore += convert;
//             currentLen++;
//             tempCurrent[k] = str[i];
//             printf("temp %c\n", tempCurrent[k]);
//             // strcpy(currentWord, tempCurrent);
//             printf("k: %i\n", k);
//             printf("highScore: %i\n", highScore);
//             printf("currentScore: %i\n", currentScore);
//             // if current score higher than last, assign new
//             k++;
//         }
//
//         if(str[i] == ' ' && currentScore > highScore){
//             puts("SPACE");
//             tempCurrent[strlen(tempCurrent) + 1] = '\0';
//             // for (size_t p= 0; p < strlen(tempCurrent); p++) {
//             //     printf("MID TEMP%c\n", tempCurrent[p]);
//             // }
//             // reset mem on highest word
//             memset(highestWord, 0, sizeof(int));
//             // puts("set highest word");
//             printf("set highest word: %s\n", highestWord);
//             strcpy(highestWord, tempCurrent);
//             printf("set highest word: %s\n", highestWord);
//
//             // set high score to current
//             highScore = currentScore;
//             printf("high score: %i\n", highScore);
//             // reset current score
//             currentScore = 0;
//             // set highest len to current
//             highestLen = currentLen;
//             // reset current len
//             currentLen = 0;
//             k = 0;
//             // set highest word to current word
//             // printf("current to set: %s\n", currentWord);
//             // printf("high word reset: %s\n",  highestWord);
//             // memset(highestWord, 0, sizeof(char));
//             // strcpy(highestWord, currentWord);
//             // printf("high word reset: %s\n", highestWord);
//             // reset current mem
//             // printf("CURRENT WORD TOP %s\n", currentWord);
//
//             memset(tempCurrent, 0, sizeof(tempCurrent));
//             for (size_t p= 0; p < 4; p++) {
//                 printf("TEMP check empty: %c\n ", tempCurrent[p]);
//             }
//             // free(currentWord);
//             // currentWord = malloc(sizeof(char) * currentLen);
//             // printf("CURRENT WORD TOP %s\n", currentWord);
//
//         } else if(str[i] == ' ' && currentScore <= highScore) {
//             puts("LAST");
//             for (size_t p= 0; p < 4; p++) {
//                 printf("BOTTOM TEMP%c\n", tempCurrent[p]);
//             }
//             // printf("high score bottom: %i\n", );
//             printf("high score bottom: %i\n", highScore);
//             // printf("high: %s\n", highestWord);
//
//             currentScore = 0;
//             currentLen = 0;
//             puts("reset current word mem");
//             // highestWord = currentWord;
//             memset(tempCurrent, 0, sizeof(tempCurrent));
//             // memset(currentWord, 0, sizeof(char));
//             printf("CURRENT high word %s\n", highestWord);
//             k = 0;
//             for (size_t p= 0; p < 4; p++) {
//                 printf("TEMP check empty: %c\n ", tempCurrent[p]);
//             }
//             // currentWord = NULL;
//             // currentWord = malloc(sizeof(char) * currentLen);
//         }
//         // at end of string, last is the longest
//         if((i + 1) == strlen(str) && currentScore > highScore){
//             puts("HERE");
//             highScore = currentScore;
//             strcpy(highestWord, tempCurrent);
//             printf("K %i\n", k);
//             printf("len %i\n", strlen(highestWord));
//
//             for (size_t m = 0; m < k; m++) {
//                 printf("%c",highestWord[m] );
//                 mem[m] = highestWord[m];
//             }
//             highestWord[strlen(highestWord)+1] = '\0';
//             // printf("\n");
//             return mem;
//         }
//     }
//     for (size_t i = 0; i < strlen(highestWord); i++) {
//         mem[i] = highestWord[i];
//     }
//     printf("%s\n",highestWord );
//     return mem;
// }
