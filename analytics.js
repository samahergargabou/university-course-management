export function calculateClassAverage(students, courseId) {
  const relevantGrades = [];

  students.forEach((student) => {
    const courseRecord = student.courses.find((c) => c.courseId === courseId);
    if (courseRecord) {
      relevantGrades.push(courseRecord.grade);
    }
  });

  if (relevantGrades.length === 0) return 0;
  const total = relevantGrades.reduce((sum, grade) => sum + grade, 0);
  return total / relevantGrades.length;
}

export function findTopStudent(students) {
  if (!students || students.length === 0) return null;

  return students.reduce((top, current) => {
    return current.getAverage() > top.getAverage() ? current : top;
  }, students[0]);
}

export function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}