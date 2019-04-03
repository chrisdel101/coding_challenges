#!/usr/bin/env bash


convertMonth(){
    # to lower
    # name="${1,,}"
    # if [[ "${name}" =~ ^jan ]]; then
    #     echo 01
    # elif [[ "${name}" =~ ^feb ]]; then
    #     echo 02
    # elif [[ "${name}" =~ ^mar ]]; then
    #     echo 03
    # elif [[ "${name}" =~ ^apr ]]; then
    #     echo 04
    # elif [[ "${name}" =~ ^may ]]; then
    #     echo 05
    # elif [[ "${name}" =~ ^jun ]]; then
    #     echo 06
    # elif [[ "${name}" =~ ^jul ]]; then
    #     echo 07
    # elif [[ "${name}" =~ ^aug ]]; then
    #     echo 08
    # elif [[ "${name}" =~ ^sept ]]; then
    #     echo 09
    # elif [[ "${name}" =~ ^oct ]]; then
    #     echo 10
    # elif [[ "${name}" =~ ^nov ]]; then
    #     echo 11
    # elif [[ "${name}" =~ ^dec ]]; then
    #     echo 12
    # fi
    date -d "${1,,} 1" +%m

}
convertMonth march
