// Import Batch 14 parts
import { batchInfo as b14Info } from "./batch14/info";
import { studentList as b14Students } from "./batch14/students";
import { courseList as b14Courses } from "./batch14/courses";
// import other batches similarly if needed
import { batchInfo as b13Info } from "./batch13/info";
import { batchInfo as b15Info } from "./batch15/info";
import { batchInfo as b16Info } from "./batch16/info";
import { batchInfo as b17Info } from "./batch17/info";
//students and courses for other batches can be imported similarly
import { studentList as b13Students } from "./batch13/students";
import { courseList as b13Courses } from "./batch13/courses";
import { studentList as b15Students } from "./batch15/students";
import { courseList as b15Courses } from "./batch15/courses";
import { studentList as b16Students } from "./batch16/students";
import { courseList as b16Courses } from "./batch16/courses";
import { studentList as b17Students } from "./batch17/students";
import { courseList as b17Courses } from "./batch17/courses";

// Combine them
export const batchesData = [
  {
    ...b13Info,
    students: b13Students,
    courses: b13Courses,
  },
  {
    ...b14Info,
    students: b14Students,
    courses: b14Courses,
  },
  {
    ...b15Info,
    students: b15Students,
    courses: b15Courses,
  },
  {
    ...b16Info,
    students: b16Students,
    courses: b16Courses,
  },
  {
    ...b17Info,
    students: b17Students,
    courses: b17Courses,
  },
];

// Helper to find batch by ID
export const getBatchById = (id) => {
  return batchesData.find((batch) => batch.id === id);
};
