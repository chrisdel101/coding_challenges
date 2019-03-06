#include <stdlib.h>
#include <stdio.h>
#include <string.h>

char* fakeBin( char *digits, char *buffer);

int main(void) {
    char input[16] = "509321967506747";
    // input[strlen(input) + 1] = '\0';
    // printf("%i\n", strlen(input));
    char* buffer = malloc(sizeof(char) + strlen(input));
    char* str = fakeBin(input, buffer);
    printf("STR: %s\n",str );
}
// for (size_t i = 0; i < strlen(digits); i++) {
//     printf("%c\n",digits[i] );
// }

char* fakeBin(char *digits, char *buffer){
        printf("%d\n", 'A');
        printf("%d\n", '5');
        printf("%d\n", '0');
        // while (num) { // loop till there's nothing left
        //     arrDigits[j++] = num % 10; // assign the last digit
        //     num/= 10; // "right shift" the number
        // }
        // printf("len: %i\n",strlen(digits) );
        for (int i = 0; i < strlen(digits); i++) {
            // printf("%i\n",i);
            if(digits[i] >= 53){
                buffer[i] = '1';
            } else {
                buffer[i] = '0';
            }
            printf("%c",buffer[i]);
        }
        // for (int i = 0; i < strlen(buffer); i++) {
        //     printf("%c",buffer[i] );
        // }
        printf("\n");

        return buffer;
}
// char* fakeBin(char *digits, char *buffer){
//         long num = atol(digits);
//         // printf("%li\n", num);
        // char arrOfDigits[strlen(digits)];
        // char store[strlen(digits)];
        // // printf("%lu\n", strlen(arrOfDigits));
        // int j = 0;
        // // // make digit arrOfDigits
        // while (num) { // loop till there's nothing left
        //     arrOfDigits[j++] = num % 10; // assign the last digit
        //     num/= 10; // "right shift" the number
        // }
//         for (int k = strlen(digits)-1; k >= 0; k--) {
//             if(arrOfDigits[k] < 5){
//                     store[k] = '0';
//             } else if(arrOfDigits[k] >= 5){
//                     store[k] = '1';
//             }
//             // printf("%i\n", k);
//         }
//         // arr[strlen(digits) + 1] = '\0';
//         //
//         // printf("%s\n",store );
//         for (int i = strlen(digits) - 1; i >= 0; i--) {
//             // printf("%i\n",(strlen(digits) -1) - i );
//         // for (int i = 0; i < 17; i++) {
//             if(store[i] == '0' || store[i] == '1'){
//                 buffer[(strlen(digits) -1) - i ] = store[i];
//                 // printf("%c\n", arrOfDigits[i] );
//             }
//             // printf("%c", arrOfDigits[i]);
//         }
//         // printf("%s\n", buffer);
//         buffer[strlen(buffer) + 1] = '\0';
//         // printf("%i\n",strlen(buffer));
//         return buffer;
// }
