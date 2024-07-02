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
            from: 'post_reactions',
            localField: '_id',
            foreignField: 'author_id',
            as: 'reactions'
        }
    },
    {
        $match: { reactions: { $exists: true }
    }
    },
    {
        $project: {
            _id: 0,
            fullname: 1
        }
    }
])
