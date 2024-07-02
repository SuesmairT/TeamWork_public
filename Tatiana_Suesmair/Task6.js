db.users.aggregate([
    {
    $match: {
      balance: {
        $gte: 100,
        $lt: 2000
      }
    }
  },

  {
    $lookup: {
      from: 'reactions',
      localField: '_id',
      foreignField: 'author_id',
      as: 'user_reactions'
    }
  },

  {
    $match: {
      'user_reactions.0': { $exists: true }
    }
  },

  {
    $project: {
      _id: 0,
      name: 1
    }
  }
])