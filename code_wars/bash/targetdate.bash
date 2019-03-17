#/!bin/bash

dateNbDays(){
    start=$1
    end=$2
    awk 'BEGIN { dailyRate= $3/36000; print "dailyRate ", dailyRate}'

    awk -v {printf ""}'
    dailyRate=$(echo "scale=10; ($3/36000)" | bc -l)
    # echo $dailyRate
    # echo $numOfdays
    i=0
    recurse(){
        if [[ $totalForDay > $end ]]; then
            return 0
        fi
        interest=$(echo "scale=5; ($1*$dailyRate)" | bc -l)
        totalForDay=$(echo "scale=5; ($1+$interest)" | bc -l)
        # echo $totalForDay
        # echo "compund" $compound
        ((++i))
        recurse $totalForDay $end
    }
    recurse $start $end
}
dateNbDays 100 150 2.0


# recurse with bc - too slow
# dateNbDays(){
    #     start=$1
    #     end=$2
    #     dailyRate=$(echo "scale=10; ($3/36000)" | bc -l)
    #     # echo $dailyRate
    #     # echo $numOfdays
    #     i=0
    #     recurse(){
        #         if [[ $totalForDay > $end ]]; then
            #             return 0
            #         fi
            #         interest=$(echo "scale=5; ($1*$dailyRate)" | bc -l)
            #         totalForDay=$(echo "scale=5; ($1+$interest)" | bc -l)
            #         # echo $totalForDay
            #         # echo "compund" $compound
            #         ((++i))
            #         recurse $totalForDay $end
            #     }
            #     recurse $start $end
            # }
            # dateNbDays 100 150 2.0
