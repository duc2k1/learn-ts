import { People } from "./People";

export class Student extends People {
  private isStudent: boolean;

  constructor(name: string, age: number, isStudent: boolean) {
    super(name, age);
    this.isStudent = isStudent;
  }

  public getIsStudent(): boolean {
    return this.isStudent;
  }
}
