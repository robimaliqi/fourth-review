Fourth Review

A company that makes academic maths papers easier to read.

Product: Scans through the maths paper looking for sums, then it extracts those sums as strings, then those strings are evaltuated, the evaluated result are output along with the sum string.

output must be an array of the sum in a string and the the output of the sum in a float

Input | Output
"1 + 1" | ["1 + 1", 2.0]
"2 - 3" | ["2 - 3", -1.0]
"1.5 _ -1" | ["1.5 _ -1", -1.5]

edge cases:

not a string: throw an error: "Input must be a string"

wrong sum: throw an error: "Input must be a valid mathematical string"
