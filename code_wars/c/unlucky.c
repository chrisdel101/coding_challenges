#include <stdlib.h>
#include <stdio.h>
#include <string.h>
#include <time.h>

int unlucky_days(int year);
// find day of the 1st of the given year
// increment by 7 and and call date again
int main(void) {
    char buff[70];
    time_t str = "2015-10-15";
    strftime(buff, sizeof buff, "%Y-%m-%d", time);
    printf("%s\n", buff);

}

int unlucky_days(int year){
   time_t current_time;
   char* c_time_string;

   /* Obtain current time. */
   current_time = time(NULL);
   // printf("%Y-%m-%d %H:%M:%S\n",current_time );

   if (current_time == ((time_t)-1))
   {
       (void) fprintf(stderr, "Failure to obtain the current time.\n");
       exit(EXIT_FAILURE);
   }

   /* Convert to local time format. */
   c_time_string = ctime(&current_time);

   if (c_time_string == NULL)
   {
       (void) fprintf(stderr, "Failure to convert the current time.\n");
       exit(EXIT_FAILURE);
   }

   /* Print to stdout. ctime() has already added a terminating newline character. */
   (void) printf("Current time is %s", c_time_string);
   exit(EXIT_SUCCESS);
}
