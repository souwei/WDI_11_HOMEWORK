# For this exercise you will need to write two functions: `multiplesOfFourAndSix` and `totalAmountToBeAddedUp`.
#
# The `multiplesOfFourAndSix` function should take one input: `maxNum`.
# This function should return an array of the multiples of 4 and 6 up to the number `maxNum` which is passed into the function. e.g. if maxNum is 25, the return value should be: [4,6,8,12,16,18,20,24]
#
# The `totalAmountToBeAddedUp` function should take one input: `arrayOfMultiples`. It will then add up all the numbers in the array and return a total. Display this total in the console.

def multiplesOfFourAndSix maxNum
  # fixed the problem
  array = []
  for i in 4...maxNum
    if (i % 4 == 0 || i % 6 == 0)
      array << i
    end
  end
  return array
end
multiplesOfFourAndSix(25)


def totalAmountToBeAddedUp arrayOfMultiples
  [4,6,8,12,16,18,20,24].inject(0, &:+)
end
totalAmountToBeAddedUp(4)
