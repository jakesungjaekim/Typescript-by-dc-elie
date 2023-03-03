{
  /**
   * Enum
   */

  //JavaScript

  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;
  console.log(dayOfToday);

  // TypeScript
  // TypeScript는 Enum을 자제하는게 좋다.
  // 그러면? Union Type을 사용하는게 좋다.
  type Days = 'Monday' | 'Wednesday' | 'Friday';
  enum DAYS {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(DAYS.Tuesday);
  const day = DAYS.Saturday;
  console.log(day);
}
