{
  // // JS
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TS
  // function tsAdd(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // JS
  // function jsFetchNum(id) {
  //   //code..
  //   //code..
  //   //code..
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TS
  // function tsFectchNum(id: string): Promise<number> {
  //   //code..
  //   //code..
  //   //code..
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // JavaScript => TypeScript
  // Optional Parameter
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('Steve', 'Jobs');
  printName('Jake');
  printName('Anna', undefined);

  // Default Parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();
  printMessage('Hello Jake, How are you?');

  //Rest Parameter
  function addNumber(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumber(1, 2));
  console.log(addNumber(1, 2, 3));
  console.log(addNumber(1, 2, 3, 4));
  console.log(addNumber(1, 2, 3, 4, 5));
}
