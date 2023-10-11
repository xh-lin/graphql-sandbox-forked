GraphQL Coding Exercise

This project demonstrates a very simple API for course data.

An example query for courses in term code 202301.
```
query CoursesQuery($termCode: Int!) {
  courses(termCode: $termCode) {
    id
    termCode
    crn
    title
  }
}

{
  "termCode": 202301
}
```

For this exercise, make the following changes.

1. Update the courses query to output only active courses.

2. Add a new attribute for the teaching faculty to the Course type. The reference keys for faculty course assignments are *termCode* and *crn*.

An example query returns the teaching faculty associated with the individual courses.
```
query CoursesQuery($termCode: Int!) {
  courses(termCode: $termCode) {
    id
    termCode
    crn
    title
    faculty {
      firstname
      lastname
      position
    }
  }
}

{
  "termCode": 202301
}
```
