export class Student {
  constructor(id, name, courses = []) {
    // Immutable ID: read-only, non-configurable, non-deletable
    Object.defineProperty(this, 'id', {
      value: id,
      writable: false,
      configurable: false,
      enumerable: true
    });

    this.name = name;
    this.courses = courses;
  }

  addCourse(courseId, grade) {
    this.courses.push({ courseId, grade });
  }

  getAverage() {
    if (!this.courses || this.courses.length === 0) return 0;
    const sum = this.courses.reduce((acc, curr) => acc + curr.grade, 0);
    return sum / this.courses.length;
  }
}