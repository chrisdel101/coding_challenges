# !/bin/bash

# opposite(){
#     if [[ $1 -lt 0 ]]; then
#         return $(expr $1 \* -1 )
#     else
#         return $(expr $1 \* -1)
#     fi
# }
    # opposite(){
    #     var=$(expr $1 \* -1)
    #     echo $var | bc - 1
    # }
opposite(){
    bc -l <<< $1*-1
    # float=$(bc -l <<< $1)
    # # val=$(expr $float \* -1)
    # echo $float

}
#
opposite -1


#
# opp   osite -5.67
