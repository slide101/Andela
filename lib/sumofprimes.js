function isPrime (n)
{
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));
    for (var i = 2; i <= q; i++)
    {
        if (n % i == '0')
        {
            return false;
        }
    }
    return true;
}

function sumPrimes(num) {
  var sum=0;
    for (var i =0; i<=num; i++) {
        if (isPrime(i))  {
            sum+=i;
        }
       
    }
    return sum;
}
