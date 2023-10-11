'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const courses_json_1 = __importDefault(require("../data/courses.json"));
/**
 * Model class representing a Banner course.
 */
class Course {
    constructor() {
        this.id = null;
        this.termCode = null;
        this.creditHours = 0;
        this.crn = null;
        this.title = null;
        this.status = 'INACTIVE';
    }
    static get(termCode) {
        return courses_json_1.default
            .filter((d) => {
            return d.termCode === termCode;
        })
            .map((d) => {
            const course = new Course();
            course.id = Buffer.from(`Course:${d.termCode}:${d.crn}`, 'utf8').toString('base64');
            course.termCode = d.termCode;
            course.creditHours = d.creditHours;
            course.crn = d.crn;
            course.title = d.title;
            course.status = 'INACTIVE';
            return course;
        });
    }
}
exports.default = Course;
//# sourceMappingURL=course.js.map