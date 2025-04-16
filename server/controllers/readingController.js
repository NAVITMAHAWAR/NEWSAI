import user from "../modles/user.js";

export const getReadingHistory = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const User = await user.findById(id);
    if (!User) res.status(404).json({ message: "User not found" });
    // console.log(User);

    // console.log(data);
    res.status(200).json({
      data: User.readingHistory,
    });
  } catch (error) {}
};

export const clearReadingHistory = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const User = await user.findById(id);
    if (!User) res.status(404).json({ message: "User not found" });
    User.readingHistory = [];
    User.save();
    // console.log(User);

    // console.log(data);
    res.status(200).json({
      message: "Reading history cleared",
    });
  } catch (error) {}
};

export const addReadingHistory = async (req, res) => {
  try {
    const { id } = req.params;

    const { article } = req.body;
    console.log(article);

    const User = await user.findById(id);

    console.log(User);
    if (!User) res.status(404).json({ message: "User not found" });

    User.readingHistory = User.readingHistory.filter(
      (rh) => rh.url !== article.url
    );

    User.readingHistory.unshift(article);
    await User.save();

    if (User.readingHistory.length > 50) {
      User.readingHistory.pop();
    }
    res.status(201).json({
      message: "reading history saved",
    });
  } catch (error) {}
};
