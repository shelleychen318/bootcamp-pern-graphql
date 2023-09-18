import { GraphQLError } from "graphql";
import reviewerService from "../services/reviewerService";

const reviewerResolvers = {
    Query: {
        reviewer: async (_parent, { id }) => {
            return await reviewerServices.getReviewer(id);
        },
        reviewers: async () => {
            return await restaurantService.getReviewers();
        }
    },
    Mutation: {
        createReviewer: async (_parent, { name, reviews }) => {
            return await reviewerService.createReviewer(name, reviews);
        }
    }
}
