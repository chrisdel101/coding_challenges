    #include <stdlib.h>
    #include <stdio.h>
    #include <string.h>

char* fakeBin( char *digits, char *buffer);


int main(void) {
    char input[100] = "5253515653535751494855565251535456534857515049575455534854555255";
    // input[strlen(input) + 1] = '\0';
    // printf("%i\n", strlen(input));
    char* buffer = malloc(sizeof(char) + strlen(input));
    char* str = fakeBin(input, buffer);
    printf("STR: %s\n",str );
}
// for (size_t i = 0; i < strlen(digits); i++) {
//     printf("%c\n",digits[i] );
// }
// char* fakeBin(char *digits, char *buffer)
// {
//     char *ptr;
//     long long int num = strtoull(digits, &ptr, 10);
//     printf("%lli", num);
//     printf("\n");
//     int i = 0;
//     while(num){
//         int digit = num % 10;
//         // printf("%i\n",digit);
//         if(digit >= 5){
//             buffer[i] = '1';
//         } else {
//             buffer[i] = '0';
//         }
//         num /= 10;
//         // printf("%lli\n",num);
//         i++;
//     }
//     return buffer;
// }
// version using string
char* fakeBin(char *digits, char *buffer){
        for (int i = 0; i < strlen(digits); i++) {
            if(digits[i] >= 53){
                buffer[i] = '1';
            } else {
                buffer[i] = '0';
            }
        }
        buffer[strlen(digits)] = '\0';
}
