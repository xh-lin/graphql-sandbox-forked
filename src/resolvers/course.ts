import Course from "../models/course"

const resolvers = {
  Query: {
    courses: (_parent, args, _context, info) => {
        const reqFields = info.fieldNodes[0].selectionSet.selections.map(selection => selection.name.value);
        const courses: Array<Course> = Course.get(args.termCode, reqFields)
        return courses
    },
  },
}

export default resolvers
