import Teacher from './teacher.js';
import Student from './student.js';
import LearningPath from './learningPath.js';
import Course from './course.js';

const freddy = new Teacher({
  name: "Freddy Vega" 
});

const juandc = new Teacher({
  name: "Juan David Castro "
});

const deGranda = new Teacher({
  name: "Diego De Granda"
})

const orlandoB = new Teacher({
  name: "Orlando Naipes"
})

const cursoDefHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
  teacher: deGranda,
});

const cursoPracHTML = new Course({
  name: "Curso Práctico de HTML y CSS",
  teacher: deGranda,
});

const cursoPOOJS = new Course({
  name: "Curso de Programación orientada a objetos con JavaScript",
  teacher: juandc,
});

const cursoUnreal = new Course({
  name: "Curso de Unreal Engine",
  teacher: freddy,
});

  const cursoUnity = new Course({
    name: "Curso de Unity 3D",
    teacher: orlandoB,
});

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [cursoDefHTML, cursoPracHTML ,cursoPOOJS],
  description: "En esta escuela aprenderás a ser un Desarrollador Web Full Stack"
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [cursoDefHTML, cursoUnreal],
  description: "En esta escuela la neta no sé que hacen"
});

const escuelaJuegos = new LearningPath({
  name: "Escuela de Videojuegos",
  courses: [cursoUnreal, cursoUnity],
  description: "En esta escuela aprenderás a desarrollar Videojuegos"
});

const juan = new Student({
  nombre: "juanito",
  username: "juandc",
  email: "juanito@gmail.com",
  twitter: "fjuandc_",
  learningPaths: [escuelaWeb, escuelaData]
});

const miguel = new Student({
  nombre: "miguelito",
  username: "migueldc",
  email: "miguel@gmail.com",
  instagram: "fmigueldc_",
  learningPaths: [escuelaData, escuelaJuegos]
});

console.log(miguel);
console.log(juan);
