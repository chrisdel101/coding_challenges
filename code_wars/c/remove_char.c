    #include <stdlib.h>
    #include <stdio.h>
    #include <string.h>




char* remove_char(const char* src);
int main(void) {

  // return 0;
    char* str = remove_char("hello");
    // printf("%s\n", str);

}

char** remove_char(const char* src)
{
    int len = strlen(src);
    char *buffer = malloc(6);
    char **pointer = &buffer;
    // let *pointer = malloc(buffer)
    // printf("%c\n",src[0] );
    // printf("%c\n",src[len] );
    for (size_t i = 0; i < len; i++) {
        if(i !=0 && i != len ){
            // printf("%c\n", src[i] );
            buffer[i] = src[i];
        }
    }
    // pointer[len] = '\0';
    // for (size_t j = 0; j < len; j++) {
    //     printf("%c\n", &pointer[j] );
    // }
    // char **store = &pointer;
    return pointer;
}
