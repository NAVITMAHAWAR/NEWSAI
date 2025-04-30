import user from "../modles/user.js";
import axios from "axios";

export const Preferences = async (req, res) => {
  try {
    const { id } = req.params;
    const { preferences } = req.body;
    // console.log(preferences);
    const User = await user.findById(id);
    console.log(User);

    User.preferences = [...preferences];
    // console.log([...preferences]);
    await User.save();
    res.status(200).json({
      message: "preferences Save SuccessFully",
    });
  } catch (error) {}
};

export const fetchNewsByCategory = async (req, res) => {
  const { category } = req.params;
  const { page = 0 } = req.query;
  console.log(page);
  const pageSize = 10;
  try {
    // const { page = 1, pageSize = 10 } = req.query;
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?page=${page}&pageSize=${pageSize}&category=${category}&country=us&apiKey=${process.env.NEWS_API_KEY}`
    );
    console.log(res.data);

    if (response.data)
      return res.status(200).json({
        length: response.data.articles.length,
        news: response.data.articles,
        nextPage:
          response.data.articles.length === pageSize ? Number(page) + 1 : null,
      });
  } catch (error) {}
};
