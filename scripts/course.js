export default class Course {
  constructor({
    name,
    teacher,
    videos = [],
    isFree = false,
    lang = "spanish"
  }) {
    this.name = name;
    this.teacher = teacher;
    this.videos = videos;
    this.isFree = isFree;
    this.lang = lang;
  }
  addVideo(video) {
    this.videos.push(video);
  }
}