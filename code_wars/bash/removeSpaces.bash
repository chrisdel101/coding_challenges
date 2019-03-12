#!/bin/bash
# loop over a string

removeSpaces(){
    printf ${1//[[:space:]]/}
}
removeSpaces "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"
