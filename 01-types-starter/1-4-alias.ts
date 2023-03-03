{
  /**
   * Type Aliases
   * 딱 정해준 타입만 받을 수  있다.
   */

  type Text = string;
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const name: string = 'ellie';
  const address: Text = 'Korea';
  const student: Student = {
    name: 'Jake',
    age: 31,
  };

  /**
   * String Literal Types
   * 딱 정해준 값만 받을 수  있다.
   */
  type Name = 'name';
  let elieName: Name;
  elieName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';
}
