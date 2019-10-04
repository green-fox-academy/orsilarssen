/*Sum
Create a sum method in your class which has a list of integers as parameter
It should return the sum of the elements in the list
Follow these steps:
Add a new test case
Instantiate your class
create a list of integers
use the t.equal to test the result of the created sum method
Run it
Create different tests where you test your method with:
an empyt list
a list that has one element in it
a list that has multiple elements in it
Run them
Fix your code if needed

export class NumberOperations {
  public addNum(num1: number, num2: number): number {
    return num1 + num2;
  }*/

export class NumberOperations {

  public sum(num1: number, num2: number): number {
    return num1 + num2;
  }

  public sum2([]): void {
    return
  }

  public sum3(num3: number): number {
    return num3;
  }

  public sum4(num4: number, num5: number, num6: number): number {
    return num4 + num5 + num6;
  }
}
