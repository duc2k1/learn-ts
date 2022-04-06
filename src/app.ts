import { Student } from "./class/Student";

const student = new Student("John", 20, true);

console.log(student.getIsStudent());
student.setAge(21);
console.log(student.getAge());
