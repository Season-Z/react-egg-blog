module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ArticleSchema = new Schema(
    {
      title: String,
      content: String,
      imgUrl: String,
      viewCount: { type: Number, default: 0 }
    },
    { timestamps: { createdAt: 'created', updatedAt: 'updated' } }
  );
  return mongoose.model('Article', ArticleSchema);
};
