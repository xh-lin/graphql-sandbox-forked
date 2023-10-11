import Course from "../models/course"

const resolvers = {
  Query: {
    courses: (_, args) => {
      const courses: Array<Course> = Course.get(args.termCode)
      return courses
    },
  },
}

export default resolvers
