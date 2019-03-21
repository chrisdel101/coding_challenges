char *rotate(char *str, int strLen){
    char tempArr1[strLen+1];
    char tempArr2[strLen+1];
    // add one for each str for '0'
    char *store= malloc((strLen*strLen) + strLen);
    int arrIndex = 0;
    char charArr[strLen+1];
       for (int i = 0; i < strLen; i++){
           // store first char and up - increase each time
           char tempArr2[i+1+1];
           tempArr1[i] = str[i];
           // store second char to the end - decrease each time
           for (size_t j = 0; j < strlen(str)-(i+1); j++) {
               tempArr2[j] = str[i+j+1];
           }
           tempArr1[1+i] = '\0';
           tempArr2[strlen(str)-i-1] = '\0';
           char* buffer;
           buffer = malloc(4) ;
           // copy second part to buffer
           strcpy(buffer, tempArr2);
           // add second string to the first string
           strcat(buffer, tempArr1);
           printf("%s\n", buffer);
           buffer[strLen + 1] = '\0';
           for (size_t j = 0; j < strLen; j++) {
               store[arrIndex] = *buffer++;
               arrIndex++;
           }
           // store[i] = *buffer;
       }
       // for (size_t i = 0; i < 12; i++) {
       //    printf("%c\n", store[i]);
       // }
       return store;

}
