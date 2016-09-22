Plus Minus
==========

Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to (TODO: 10-4) are acceptable.

###Input Format###

The first line contains an integer, N, denoting the size of the array.
The second line contains N space-separated integers describing an array of numbers (TODO: a0, a1, ).

###Output Format###

You must print the following  lines:

1. A decimal representing of the fraction of positive numbers in the array.
2. A decimal representing of the fraction of negative numbers in the array.
3. A decimal representing of the fraction of zeroes in the array.

###Constraints###
- ![equation](http://www.sciweavers.org/tex2img.php?eq=1%20%20%5Cleq%20%20N%20%20%5Cleq%20%2010%20&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0)
- ![equation](http://www.sciweavers.org/tex2img.php?eq=0%20%20%5Cleq%20%20A%5Cbig%5C%7Bi%5Cbig%5C%7D%20%20%20%5Cleq%2010%5E%7B10%7D%0A&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0)

###Sample Input###

```
6
-4 3 -9 0 4 1
```

###Sample Output###

```
0.500000
0.333333
0.166667
```

###Explanation###

There are 3 positive numbers, 2 negative numbers, and 1 zero in the array.
The respective fractions of positive numbers, negative numbers and zeroes are , (TODO) and , respectively.

##Solutions

- Solution 1 - [Fiddle](https://jsfiddle.net/EmilioAiolfi/qymw9g8u/)
