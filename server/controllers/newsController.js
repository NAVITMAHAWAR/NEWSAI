import user from "../modles/user.js";

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
