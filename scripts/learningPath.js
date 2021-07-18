export default class LearningPath {
  constructor({
    name,
    courses = [],
    description,
  }) {
    this.name = name;
    this.courses = courses;
    this.description = description;
  }
  addCourse(course) {
    this.courses.push(course);
  }
}