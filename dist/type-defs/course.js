"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  enum CourseStatus {
    INACTIVE
    ACTIVE
    CANCELLED
  }

  type Course {
    """
    Unique record id
    """
    id: ID!

    """
    Number of credit hours granted for this course.
    """
    creditHours: Float

    """
    CRN of the course.
    """
    crn: Int!

    """
    Course registration status.
    """
    status: CourseStatus!

    """
    Term code during which the given course takes place.
    """
    termCode: Int!

    """
    Title of this course.
    """
    title: String!
  }

  type Query {
    courses(termCode: Int!): [Course]
  }
`;
exports.default = typeDefs;
//# sourceMappingURL=course.js.map