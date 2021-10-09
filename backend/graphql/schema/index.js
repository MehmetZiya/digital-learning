const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type User {
        _id: ID!
        name: String!
        surname: String!
        email: String!
        password: String
        img: String
        wishList: [Course]
        purchased: [Course]
        owner: [Course]
    }

    type Course {
        _id: ID!
        title: String!
        desc: String!
        price: Float!
        img: String!
        totalEnrolled: Int
        rating: Int
        totalRate: Int
        releaseDate: String!
    }

    input UserInput {
        name: String!
        surname: String!
        email: String!
        password: String!
    }

    input CourseInput {
        title: String!
        desc: String!
        price: Float!
        img: String!
        releaseDate: String!
    }

    type RootQuery {
        users: [User!]!
        courses: [Course!]!
    }

    type RootMutation {
        createUser(userInput: UserInput): User
        createCourse(courseInput: CourseInput): Course
    }
    schema {
        query: RootQuery
        mutation: RootMutation
    }

`);