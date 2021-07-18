export default class Student {
  constructor({
    name,
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
  publicarComentario(commentContent){
    const comment = new Comment({
      content: comment,
      studentName: this.name,
    });
    comment.publicar();
  }
}

export default class FreeStudent extends Student {
  constructor(props){
    super(props);
  }

  approveCourse(newCourse){
    if (newCourse.isFree){
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(`Lo sentimos ${this.name} sólo puedes tomar cursos gratis`)
    }
  }
}

export default class BasicStudent extends Student {
  constructor(props){
    super(props);
  }
  approveCourse(newCourse){
    if (newCourse.lang !== "english"){
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(`Lo sentimos ${this.name} no puedes tomar cursos en inglés`)
    }
  }
}

export default class ExpertStudent extends Student {
  constructor(props){
    super(props);
  }
  approveCourse(newCourse){
    this.approvedCourses.push(newCourse);
  }
}