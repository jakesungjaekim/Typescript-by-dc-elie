{
  // Array

  const fruits: string[] = ['apple', 'banana'];
  const scores: number[] = [1, 3, 4];

  function printArray(fruits: readonly string[]) {}

  // Tuple
  let student: [string, number];
  student = ['jake', 31];
  student[0]; // jake
  student[1]; // 31
  const [name, age] = student;
}
