const File = require("../model/FileScheme");

const postFile = async (req, res) => {
  /*   console.log(req.file.filename); */

  try {
    await File.create({ fileUrl: req.file.filename });

    res.json({ msg: "Ok" });
  } catch (error) {
    req.send(error);
  }
};

const sendSample = async (req, res) => {
  console.log(req.body.msg);

  res.json({ msg: "taninga" });
};

const getAllData = async (req, res) => {
  const file = await File.find().lean();

  if (!file) {
    return res.status(400).json({ message: "No File Found" });
  }

  res.json(file);
};

module.exports = { postFile, sendSample, getAllData };
