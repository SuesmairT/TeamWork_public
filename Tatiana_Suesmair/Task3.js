db.users.aggregate([
  {
    $sort: {
      balance: -1,
    },
  },
  {
    $limit: 2,
  },
  {
    $project: { fullname: 1, _id: 0, balance: 1 },
  },
]);