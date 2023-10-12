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

    """
    Faculty of this course.
    """
    faculty: [Faculty]
  }

  type Faculty {
    """
    First name of this faculty.
    """
    firstname: String!

    """
    Last name of this faculty.
    """
    lastname: String!

    """
    Position of this faculty.
    """
    position: String!

    """
    Organization of this faculty.
    """
    organization: String!

    """
    Whether or not this is the primary faculty of the course.
    """
    isPrimaryFaculty: Boolean!
  }

  type Query {
    courses(termCode: Int!): [Course]
  }
`;

export default typeDefs;
