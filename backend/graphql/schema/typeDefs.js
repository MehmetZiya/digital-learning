const { gql } = require("apollo-server-express");

const typeDefs = gql `
    type User {
        id: ID!
        name: String!
        surname: String!
        email: String!
        password: String
        img: String
        wishList: [Course!]
        purchased: [Course!]
        owner: [Course!]
    }

    type AuthData {
        userId: ID!
        token: String!
        tokenExpiration: Int!
    }

    type Course {
        id: ID!
        title: String!
        desc: String!
        price: Float!
        img: String!
        totalEnrolled: Int
        rating: Int
        totalRate: Int
        releaseDate: String!
        creator: User!
    }

    type Category {
        id: ID!
        name: String!
        subCategory : [subCategory!]!
    }

    type subCategory {
        name: String!
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
        creator: String!
           
    }

    type Query {
        courses : [Course]
        users : [User!]!
        categories : [Category!]!
        login(email: String! , password: String!): AuthData!
    }

    type Mutation {
        createUser(userInput: UserInput): User
        createCourse(courseInput: CourseInput): Course
    }
`;

module.exports = typeDefs