import { gql } from "apollo-server-express";

const reviewerType = gql`
    type Review {
          id: ID!
          review: String
          reviewer: Reviewer!
      }
 
    type Reviewer {
        id: ID!
        name: String!
        reviews: [Review!]!
    }
`;
export default reviewerType;
