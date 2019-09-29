/*Teacher Student
Create Student and Teacher classes
Student
learn() -> prints the student is learning something new
question(teacher) -> calls the teachers answer method

Teacher
teach(student) -> calls the students learn method
answer() -> prints the teacher is answering a question
Instantiate a Student and Teacher object
Call the student's question() method and the teacher's teach() method*/

class Student {
    public skill: number;
    constructor(skill: number) {
        this.skill = skill;
        console.log(`New student instantiated with skill ${this.skill}`)
    }
    static learn(): void {
        console.log('student is learning something new')
    }

    question(): void {
        Teacher.answer();
    }
}

class Teacher {
    teach(): void {
        Student.learn()
    }

    static answer(): void {
        console.log('Teacher is answering a question')
    }
}

let cleverStudent = new Student(1);
console.log(cleverStudent.skill)
cleverStudent.question();

let niceTeacher = new Teacher;
niceTeacher.teach();