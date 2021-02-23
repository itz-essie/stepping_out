module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    author_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 80],
      },
    },
    author_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 260],
      },
    },
    activity_category: {
      type: DataTypes.STRING,
        default: 'Entertainment'
    },
    activity_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30],
      },
    },
    activity_description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 500],
      },
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      validate: {
        len: [1],
      },
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      validate: {
        len: [1, 260],
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 25],
      },
    },
    state_code: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 2],
      },
    },
  });
  return Posts;
};
