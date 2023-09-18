import db from "../models/index";

async function getReviewer(id) {
    return await db.Reviewer.findByPk(id);
}

async function getReviewers() {
    return await db.Reviewer.findAll();
}

async function createReviewer(name, reviews) {
    return await db.Reviewer.create({
      name,
      reviews
    });
}

async function updateReviewer(id, name, reviews) {
    const updateResult = await db.Reviewer.update({
        name,
        reviews
    },
    {
        returning: true,
        where: { id: id }
    }

    if (updateResult[0] === 1) {
        return updateResult[1][0];
    } else {
        return null;
    }
}


async function deleteReviewer(id) {
    await db.Review.destroy({
        where: { reviewerId: id }
    });

    // Delete the reviewer
    const deleteResult = await db.Reviewer.destroy({
        where: { id: id }
    });

    if (deleteResult === 1) {
        return id;
    } else {
        return null;
    }
}

const reviewerService = { getReviewer, getReviewers, createReviewer, updateReviewer, deleteReviewer };
export default reviewerService;
