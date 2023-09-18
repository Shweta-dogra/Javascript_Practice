// Given an integer X, find its square root. If X is not a perfect square, then return floor(√x).

// using binary search

function findSqrt(x){
    
    if (x == 0 || x == 1)
        return x;
 
    let l = 1;
    let r = x/2;
    let ans ;
    while (l <= r){
        let mid = (l+r) / 2;
 
        if (mid*mid == x){
            return mid;
        }
        
        if (mid*mid < x){
            l = mid+1;
            ans = mid;
            
        }
        else
            r = mid-1;    
    }
    return ans;
}

console.log(findSqrt(4));