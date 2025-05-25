import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Router from "express";
import userDataAuthMiddle from "../middlewares/userDataMiddle";
import { LinkSchema, user, UserData } from "../db/db";
import { title } from "process";
import { appendFile } from "fs";
import { Random } from "../utils";
const UserDataRouter = express.Router();

declare global {
  namespace Express {
    interface Request {
      userId?: string; // or whatever type your userId should be
    }
  }
}

UserDataRouter.post("/data",userDataAuthMiddle,async function (req: any, res: any) {
    const link = req.body.link;
    const title = req.body.title;

    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized: userId missing" });
    }

    const userDataCreated = await UserData.create({
      link,
      title,
      
      UserId: req.userId,
      tags: [],
    });
    return res
      .status(400)
      .json({ userData: { userDataCreated: userDataCreated } });
  }
);

UserDataRouter.get("/content",userDataAuthMiddle,async function (req: any, res: any) {
    //@ts-ignore
    const userId = req.userId;

    const content = await UserData.find({ UserId: userId }).populate(
      "UserId",
      "name"
    );
    res.status(200).json({ content });
  }
);

UserDataRouter.delete("/delete",userDataAuthMiddle,async function (req: any, res: any) {
    const contentId = req.body.contentId;

    try {
      const result = await UserData.deleteOne({
        _id: contentId,
        UserId: req.userId,
      });

      if (result.deletedCount === 0) {
        return res
          .status(404)
          .json({ message: "No matching data found to delete" });
      }

      res.json({ message: "Deleted successfully" });
    } catch (err) {
      console.error("Error deleting content:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

// Assuming necessary imports like Request, Response, LinkSchema, Random, etc.
// from 'express', your models, and utility functions.
// Ensure your 'src/types/express.d.ts' or 'global.d.ts' is set up as discussed.

UserDataRouter.post("/brain/share", userDataAuthMiddle, async (req: Request, res: Response):Promise<void>=> { // Explicitly type req, res
    const { share } = req.body;

    if (share) {
        // --- Path 1: share is true ---

        // It's good practice to check if userId exists after middleware
        if (!req.userId) {
            console.error('Error: req.userId is missing in /brain/share (share=true path).');
             res.status(401).json({ message: "Authentication required." }); // Must return here
        }

        const existingLink = await LinkSchema.findOne({ UserId: req.userId });

        if (existingLink) {
            // --- Path 1a: Link already exists ---
             res.json({ hash: existingLink.hash }); // IMPORTANT: 'return' here
        }

        // --- Path 1b: Link does not exist, create new ---
        const hash = Random(10);
        await LinkSchema.create({  hash });
       res.json({ hash }); // IMPORTANT: 'return' here
    } else {
        // --- Path 2: share is false (remove functionality) ---

        // It's good practice to check if userId exists after middleware
        if (!req.userId) {
            console.error('Error: req.userId is missing in /brain/share (share=false path).');
             res.status(401).json({ message: "Authentication required." }); // Must return here
        }

        try {
            await LinkSchema.deleteOne({ UserId: req.userId });
             res.json({ message: "Removed link" }); // IMPORTANT: 'return' here
        } catch (error) {
            console.error("Error removing link:", error);
            // Even in a catch block for an async function, you need to return a response
             res.status(500).json({ message: "Internal server error during link removal." }); // IMPORTANT: 'return' here
        }
    }
    // No implicit return if all paths above properly use 'return'
});





UserDataRouter.get("/brain/:shareLink", async (req: any, res: any) => {
  const hash = req.params.shareLink;

  const link = await LinkSchema.findOne({ hash });

  if (!link) {
    return res.status(411).json({
      message: "sorry Incorrect input ",
    });
  }

  const content = await UserData.find({ userId: link.userId });

  const findUser = await user.findOne({ userId: link.userId });
  if (!findUser) {
    res.json({
      message: "user not found error ideally not happen",
    });
    return;
  }
  res.status(200).json({
    user: findUser,
    data: content,
  });
});

export default UserDataRouter;
