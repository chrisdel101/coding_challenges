#include <string.h>
#include <stdio.h>
#include <stdlib.h>

// iter_string
void iter_string(const char *str) {
    const char *pos = str;

    while (1) {
        size_t tok = strcspn(pos, " ");
        printf("%.*s\n", (int)tok, pos);

        if (pos[tok] == '\0')
            break;
        pos += tok + 1;
    }
}

int main(int argc, char* argv[]) {
    iter_string("a b c d");
}
// WHOLE SOLUTION
unsigned int score_word(const char *word, size_t len) {
    unsigned int accum = 0;

    for (size_t i = 0; i < len; ++i) {
        accum += word[i] - 'a' + 1;
    }

    return accum;
}

char *score_words(const char *str) {
    const char *pos = str;

    unsigned int highest_score = 0;
    const char *word_start = NULL;
    size_t word_len = 0;

    while (1) {
        size_t sep = strcspn(pos, " ");
        unsigned int current_score = score_word(pos, sep);

        printf("scored: '%.*s' as %u\n", (int)sep, pos, current_score);
        if (current_score > highest_score) {
            word_start = pos;
            word_len = sep;
            highest_score = current_score;
        }

        if (pos[sep] == '\0')
            break;
        pos += sep + 1;
    }

    return strndup(word_start, word_len);
}

int main(int argc, char* argv[]) {
    char *word = score_words("a d c e aa");
    printf("HIGHEST SCORE: %s\n", word);
}
