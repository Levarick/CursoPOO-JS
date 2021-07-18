class Student {
  constructor({
    nombre,
    email, 
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.nombre = nombre;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

class LearningPath {
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

class Course {
  constructor({
    name,
    teacher,
    videos = [],
  }) {
    this.name = name;
    this.teacher = teacher;
    this.videos = videos;
  }
  addVideo(video) {
    this.videos.push(video);
  }
}

const juan = new Student({
  nombre: "juanito",
  username: "juandc",
  email: "juanito@gmail.com",
  twitter: "fjuandc_",
});

const miguel = new Student({
  nombre: "miguelito",
  username: "migueldc",
  email: "miguel@gmail.com",
  instagram: "fmigueldc_",
});