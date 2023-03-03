{
  /**
   * Type Inference
   */

  let text = 'Hello';
  function print(message: string | undefined) {
    console.log(message);
  }
  print('Jake, you`re doing well');

  function add(x: number, y: number): number {
    return x + y;
  }
  const result: number = add(1, 2);
  console.log(result);
}
