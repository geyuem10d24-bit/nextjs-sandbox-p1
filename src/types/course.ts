export interface Course {
  id: string;
  title: string;
  difficulty: string;
  duration: string;
  status: "Not Started" | "In Progress" | "Completed"; // status is a union type of specific string literals, only these three values are allowed
}

const items: Course[] = [
  {
    id: "1",
    title: "t",
    difficulty: "easy",
    duration: "25",
    status: "Completed",
  },
];
