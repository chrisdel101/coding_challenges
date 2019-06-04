<?php
function DNA_strand($dna){
    $newStr = "";
    for ($i=0; $i < strlen($dna); $i++) { 
        switch ($dna[$i]) {
            case 'A':
                $newStr .= 'T';
                break;
            case 'T':
                $newStr .= 'A';
                break;
            case 'G':
                $newStr .= 'C';
                break;
            case 'C':
                $newStr .= 'G';
                break;
        }
    }
    return $newStr;
}