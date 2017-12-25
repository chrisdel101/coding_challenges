function queueTime(customers, n) {
    

}

[7,10,11,14],2


Picture this instead of customers and queues as buckets and water.

if I have 3 buckets, and 20, 15, 30, 12 oz of water, what is the minimum possible weight that a bucket can have?
bucket1 = 0 add 20 here
bucket2 = 0 this is still empty add 15 here
bucket3 = 0 this is still empty add 30 here

but that leaves 12 oz left over, how to find the best place to pour? Find the lowest possible bbucket which is bucket 2
bucket2 = 15 add 12 oz here which gives us 27

what is the fullest bucket (or in the code example the highest amount of time that a line at the grocer can take?)
the answer is bucket 3 which is 30.
what if we had an additional 12 to that?

bucket1 is only 20, being the lowest, we pour 12 into bucket 1
bucket1 = 32 now, this would be the new minimum possible weight distributed among 3 buckets
