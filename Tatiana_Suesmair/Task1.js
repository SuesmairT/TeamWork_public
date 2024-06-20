
db.videos.countDocuments(
    { duration_secs: { $lt: 120 * 60 } }
)

