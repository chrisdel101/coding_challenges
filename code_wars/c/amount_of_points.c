#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>

int points(char* arr[]);
int myArray(char* arr[]);

int main(void) {
    char* arr[] = {"1:0","2:2","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"};
    // char* arr[] = {"1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"};
    // points(arr);
    points(arr);
}
// working
int points(char* games[])
{
    int points = 0;
   for (int i = 0; i < 10; i++) {
        int team1 = games[i][0];
        int team2 = games[i][2];
        if(team1 > team2){
            points = points + 3;
        } else if(team1 == team2){
            // printf("%i\n",i );
            points = points + 1;
        }
    }
    // printf("%i\n", points );
    return points;
}
int points(char* games[])
{
    int points = 0;
    char* blank = "";
    int i = 0;
    while (strncmp(games[i], blank, 1) != 0) {
        char* str = games[i];
        char team1 = str[0];
        char team2 = str[2];
        if(team1 > team2){
            points = points + 3;
        } else if(team1 == team2){
            // printf("%i\n",i );
            points = points + 1;
        }
        i++;
    }
    // printf("%i\n", points );
    return points;
}
// int points(char* games[])
// {
//     int points = 0;
//     bool end = false;
//     int i = 0;
//     if(end){
//         return(0);
//         //do all the while loop stuff
//     } else {
//         while(!end){
//             char* str = games[i];
//             char* blank = "";
//             if(strncmp(str, blank, 1) == 0){
//                 printf("%i\n", points);
//                 return points;
//             }
//             char first = str[0];
//             char second = str[2];
//             if(first > second){
//                 points = points + 3;
//             } else if(first == second){
//                 points = points + 1;
//             }
//             i = i + 1;
//         }
//     }
//     return(0);
// }
// if(!end){
    //     while(!end){
        //         char* str = games[i];
        //         char* blank = "";
        //         if(strncmp(str, blank, 1) == 0){
            //             printf("%i", points);
            //             return points;
            //         }
            //         char first = str[0];
            //         char second = str[2];
            //         if(first > second){
                //             points = points + 3;
                //         } else if(first == second){
                    //             points = points + 1;
                    //         }
                    //         i = i + 1;
                    //     }
                    //
                    // } else {
                        //     return 0;
                        // }
                        // return

//
// int points(char* arr[]) {
//     int points = 0;
//     // int length = sizeof(&arr)/sizeof(char*);
//     int sLen = strlen(arr)
//     printf("%i\n", length);
//     for (size_t i = 0; i < length; i++) {
//         char *str = arr[i];
//         char first = str[0];
//         char second = str[2];
//         // printf("%c\n", first);
//         // printf("%c\n", second);
//         if(first > second){
//             points = points + 3;
//         } else if(first == second){
//             points = points + 1;
//         }
//             // for (size_t j = 0; j < strlen(str) ; j++) {
//             //     // printf("%c\n", str[0]);
//             //     // printf("%c\n", str[2]);
//             //     // if()
//             // }
//         }
//         // printf("%i\n", points);
//         return points;
//
// }
