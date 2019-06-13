
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {
    int i = 4;
    double d = 4.0;
    char s[] = "HackerRank ";
    s[strlen(s)+2] = '\0';

    // Declare second integer, double, and String variables.
    int int2;
    double double2;
    char newStr[128];
    char *buffer = malloc(128);
    // char buffer[len + strlen(newStr)];
    
    // Read and save an integer, double, and String to your variables.
    scanf("%i", &int2); 
    scanf( "%lf", &double2);
    // https://stackoverflow.com/a/20156727/5972531
    getchar();
    fgets(newStr, sizeof newStr, stdin);
    
    // // Print the sum of both integer variables on a new line.
    int newSum = i + int2;
    printf("%i\n", newSum);
    // // // Print the sum of the double variables on a new line.
    double newSum2 = double2 + d;
    printf("%.1f\n", newSum2);
    
    // // Concatenate and print the String variables on a new line
    // // The 's' variable above should be printed first.

    strcpy(buffer, s);
    strcat(buffer, newStr);
    printf("%s\n", buffer);

    free(buffer);
    return 0;

}