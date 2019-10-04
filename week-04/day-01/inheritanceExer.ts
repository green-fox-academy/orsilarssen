'use strict'

class Person {
    protected name: string;
    protected age: number;
    protected gender: string;

    constructor(name = 'Jane Doe', age = 30, gender = 'female') {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    introduce(): void {
        console.log(`Hi, I\'m ${this.name}, a ${this.age} year old ${this.gender}.`);
        return
    }

    getGoal(): void {
        console.log('My goal is: Live for the moment!');
    }
}

class Student extends Person {
    previousOrganization: string;
    skippedDays: number;

    constructor(name?: string, age?: number, gender?: string, previousOrganization: string = 'The School of Life', skippedDays: number = 0) {
        super(name, age, gender);
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays;
    }

    getGoal(): void {
        console.log('My goal is:Be a junior software developer.')
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days 
        from the course already.`)
        return
    }

    skipDays(numberOfDays: number): void {
        this.skippedDays = this.skippedDays + numberOfDays;
    }
}

class Mentor extends Person {
    level: string;

    constructor(name?: string, age?: number, gender?: string, level: string = 'intermediate') {
        super(name, age, gender);
        this.level = level;
    }

    getGoal(): void {
        console.log('My goal is: Educate brilliant junior software developers.')
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`)
        return
    }

}

class Sponsor extends Person {
    company: string;
    hiredStudents: number;

    constructor(name?: string, age?: number, gender?: string, company: string = 'Google', hiredStudents: number = 0) {
        super(name, age, gender);
        this.company = company;
        this.hiredStudents = hiredStudents;
    }

    hire(): void {
        this.hiredStudents++;
    }

    getGoal(): void {
        console.log('My goal is: Hire brilliant junior software developers.');
    }

    introduce(): void {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`)
        return
    }
}

class Cohort {
    name: string;
    listOfStudents: Student[];
    listOfMentors: Mentor[];

    constructor(name: string, listOfStudents: Student[] = [], listOfMentors: Mentor[] = []) {
        this.name = name;
        this.listOfStudents = listOfStudents;
        this.listOfMentors = listOfMentors;
    }

    addStudent(student): void {
        this.listOfStudents.push(student);
    }

    addMentor(mentor): void {
        this.listOfMentors.push(mentor);
    }

    info(): void {
        console.log(`The ${this.name} cohort has ${this.listOfStudents.length} students and ${this.listOfMentors.length} mentors.`)
    }
}


//Test input

let people = [];

let mark = new Person('Mark', 46, 'male');
people.push(mark);

let jane = new Person();
people.push(jane);

let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);

let student = new Student();
people.push(student);

let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);

let mentor = new Mentor();
people.push(mentor);

let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

let sponsor = new Sponsor();
people.push(sponsor);

student.skipDays(3);

for (let i = 0; i < 6; i++) {
    elon.hire();
}

for (let i = 0; i < 4; i++) {
    sponsor.hire();
}

for (let person of people) {
    person.introduce();
    person.getGoal();
}

let awesome = new Cohort('AWESOME');
awesome.addStudent(student);
awesome.addStudent(john);
awesome.addMentor(mentor);
awesome.addMentor(gandhi);
awesome.info();



/*let Jane = new Person();
Jane.introduce();
Jane.getGoal();

let Jani = new Student();
Jani.introduce();
Jani.getGoal();

let Marika = new Mentor();
Marika.introduce();
Marika.getGoal();

let CEO = new Sponsor();
CEO.introduce();
CEO.getGoal();
CEO.introduce();*/



