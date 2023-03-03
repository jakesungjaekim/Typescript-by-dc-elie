{
  /**
   * Type Assertion
   */

  function jsStrFunc(): any {
    return 'Hello';
  }
  const result = jsStrFunc();
  (result as string).length;
  console.log((result as string).length);

  const wrong: any = 5;
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2);
}
