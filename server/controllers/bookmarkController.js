import user from "../modles/user.js";
export const addBookmark = async (req, res) => {
  console.log("hello");
  try {
    const { article } = req.body;
    console.log(article);
    console.log(req.params);

    const { id } = req.params;
    // console.log(id);

    const User = await user.findById(id);
    if (!User) res.status(404).json({ message: "User not found" });
    console.log(User);

    // check if bookmarks already existing  User.bookmarks

    const someArticle = User.bookmarks.some((b) => b.url === article.url);
    // console.log(someArticle);

    if (someArticle) res.status(404).json({ message: "Already exist" });
    console.log(article);

    User.bookmarks.push(article);
    await User.save();
    res.status(202).json({ message: "Bookmark added successfully" });
  } catch (error) {}
};

export const getBookmarks = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const User = await user.findById(id);
    if (!User) res.status(404).json({ message: "User not found" });
    // console.log(User);

    // console.log(data);
    res.status(200).json({
      data: User.bookmarks,
    });
  } catch (error) {}
};

export const removeBookmark = async (req, res) => {
  const { id, articleId } = req.params;
  const User = await user.findById(id);
  if (!User) res.status(404).json({ message: "User not found" });
  User.bookmarks = User.bookmarks.filter((b) => b._id.toString() !== articleId);
  await User.save();

  res.status(200).json({
    message: "Bookmarks remove",
  });
};
