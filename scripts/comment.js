export default class Comment {
  constructor({
    studentName,
    content,
    studentRole = "estudiante",
  }) {
    this.studentName = studentName;
    this.content = content;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  publicar() {
    console.log(`${this.studentName} (${this.studentRole})`);
    console.log(this.likes);
    console.log(this.content);
  }
}