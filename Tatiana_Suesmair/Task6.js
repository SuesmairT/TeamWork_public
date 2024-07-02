db.users.countDocuments(
    {
        country: { $in: ['Germany', 'USA'] }
    },
    {   is_blocked: { $ne: true },
        balance: { $gte: 10, $lte: 1000 }
    }
)