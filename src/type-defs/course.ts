"use strict";
import { gql } from "apollo-server-express";

const typeDefs = gql`
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

export default typeDefs;
