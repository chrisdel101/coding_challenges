#include <stdlib.h>
#include <string.h>
#include <stdio.h>


char *no_space(char *strin);

int main(void){
    char* str = no_space("lorinreprehende   ritinvoluptatevelitessecillumdoloreeufugiat");
    printf("%s", str);
    printf("\n" );
}
char *no_space(char *strin) {
    // printf("%i\n",strlen(strin ));
    // for(int i = 0; i < 10; i++){
    //   printf("%c\n", strin[i]);
    // }
    if(strlen(strin) == 1){
        return strin;
    }
    char *arr = malloc(strlen(strin) + 1);
    int size = strlen(strin);
    int i = 0;
    int j = 0;
    while(i < strlen(strin)){
        if(strin[i] != ' '){
            strncpy(&arr[j], &strin[i], 1);
            j++;
            printf("%c\n",strin[i]);
        }
        i++;
    }
    // for (size_t i = 0; i < strlen(strin) + 1; i++){
    //     if(strin[i] != ' '){
    //         printf("%c\n",strin[i] );
    //             strncpy(&arr[i], &strin[i], 1);
    //             if(i !== strlen(strin)){
    //                 -
    //             }
    //         }
    //     }

        // for (size_t i = 0; i < 10; i++) {
        //     // printf("%c\n", arr[i]);
        // }
        return arr;
}
