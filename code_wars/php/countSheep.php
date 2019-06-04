<?php
function countF($n){
  $str = "";
  for ($x = 1; $x <= $n; $x++) {
      $str .= $x . " sheep...";
      // echo $str;
  }
  return $str;
};
echo countF(1);