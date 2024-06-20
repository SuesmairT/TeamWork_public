db.users.aggregate([
      { // этап 1
          $sort: {
              balance: -1
          }
      },
      { // этап 2
          $limit: 2
      }
  ])