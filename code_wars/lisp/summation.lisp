(defun summation (n) 
; (write n)
 (COND
    ((eq n 0) 0)
    ((+ (summation (- n 1)) n))
    )
)