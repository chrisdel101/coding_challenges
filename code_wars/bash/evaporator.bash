#!/bin/bash
evaporator () {
# threshold as a decimal
    thresToNum=$(echo "scale=14; ($3/100)" | bc -l)
#point where loop will break
    breakPoint=$(echo "($1 * $thresToNum)" | bc -l)
# evap to a decimal
    evapToNum=$(echo "scale=14; ($2/100)" | bc -l)
#amount that has evaporated
    i=1
    amountEvap=$(echo "scale=14; ($1*$evapToNum)" | bc -l)
#amount left
    contentLeft=$(echo "scale=14; ($1 - $amountEvap)" | bc -l)

    while [ "$(bc <<< "$contentLeft > $breakPoint")" == "1"  ]; do
    # while [[ $i -lt 5 ]]; do
        amountEvap=$(echo "scale=14  ; ($contentLeft*$evapToNum)" | bc -l)
    #amount left
        contentLeft=$(echo "scale=14; ($contentLeft - $amountEvap)" | bc -l)
        let i=i+1
    done
    echo $i
}
evaporator 100 4.06 1.25
# evaporator 10 10 10
#
# let breakingPoint = content * (threshold / 100)
# let i = 1
# let amountEvap = content * (evaported/100)
# let contentLeft = content - amountEvap
#
# while (contentLeft > breakingPoint) {
#     i++
#     amountEvap = contentLeft * (evaported/100)
#     contentLeft = contentLeft - amountEvap
#     console.log(contentLeft)
# }
