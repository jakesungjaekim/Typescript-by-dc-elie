{
  // JavaScript
  // let ES6이후로 생긴 변수 선언 방법
  let name = 'Hello';
  name = 'Hi';

  // const
  const age = 31;
}

{
  /**
   * JavaScript
   * Primitive : number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   *
   *  */

  // number
  const num: number = 1237777;

  // string
  const str: string = 'Jake';

  // boolean
  const boolean: boolean = true;

  // undefiend
  let name: undefined; // 😭 이런식으로 지정해주지 않음.
  let age: number | undefined;
  age = undefined;
  age = 100;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 😭 이런식으로 지정해주지 않음.
  let person2: string | null;
  person2 = 'jake';
  person2 = null;

  // unknown 😭 가능한 쓰지 않는 것이 좋습니다.
  let notSure: unknown = 0;
  notSure = 'Hello';
  notSure = true;

  // any 😭 가능한 쓰지 않는 것이 좋습니다.
  let anything: any = 0;
  anything = 'jake';

  // void 함수에서 아무것도 리턴하지 않는다면? void
  function print(): void {
    console.log('Hello');
    return;
  }

  let unusable: void = undefined; // 😭 이렇게 안씁니다.

  // never 에러를 던지던지, 와일문을 통해 무한뤂이던지.. 절대 리턴값은 없다.
  function throwError(message: string): never {
    //message -> server (log)
    throw new Error(message);

    while (true) {}
  }

  // object
  let obj: object = [1, 4]; // 😭 더 구체적으로 적어야함
  function acceptSomeObj(obj: object) {}
  acceptSomeObj({ name: 'Jake' });
  acceptSomeObj({ animal: 'Cat' });
}
