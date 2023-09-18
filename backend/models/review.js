module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("review", {
    review: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false
  });

  Review.associate = (models) => {
    Review.belongsTo(models.Reviewer, {
      foreignKey: 'reviewerId',
      as: 'reviewer'
    });
  };

  return Review;
}
