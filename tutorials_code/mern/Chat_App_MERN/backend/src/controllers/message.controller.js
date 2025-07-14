import User from "../models/user.model.js";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";
import { getReceiverSocketId, io } from "../lib/socket.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser._id },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersForSidebar controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const getMessages = async (req, res) => {
  try {
    // when i click on some user in the sidebar this will pass his id in route
    // then rename id to userToChatWithId

    const { id: userToChatId } = req.params;

    // my id which came from protectRoute after check if i loged in
    const myId = req.user._id;

    // then find the messages between me and the userToChat user if i was the sender or the receiver
    const message = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });

    res.status(200).json(message);
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const sendMessages = async (req, res) => {
  try {
    const { text, image } = req.body;
    // get the reciver id from the URL to pass messages to him
    const { id: receiverId } = req.params;
    // my id
    // from protectRoute middleware which is the logged in user (me)
    const senderId = req.user._id;

    // to store the image URL after upload it to cloudinary if there is an image, intially empty
    let imageUrl;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    // make the message then save it to the database then return it
    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    // todo: realtime functionality goes here => socket.io
    const receiverSocketId = getReceiverSocketId(receiverId);
    // if user is online
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller: ", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
