module.exports = (sequelize, DataTypes) => {
  const Reviewer = sequelize.define("reviewer", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reviews: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  {
    timestamps: false
  });

  Reviewer.associate = (models) => {
    Reviewer.hasMany(models.Review, {
      foreignKey: 'reviewerId',
      as: 'writtenReviews'
    });
  };

  return Reviewer;
}
