import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Router from "express";
import userDataAuthMiddle from "../middlewares/userDataMiddle";
import { LinkSchema, user, UserData } from "../db/db";
import { title } from "process";
import { appendFile } from "fs";
import { Random } from "../utils";
import { any } from "zod";
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
      type:req.body.type,
      title,
      UserId: req.userId,
      tags: [],
    });
    return res.json({ userData: { userDataCreated: userDataCreated } });
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

interface AuthenticatedRequest extends Request {
  userId?: string;
}

UserDataRouter.post("/brain/share", userDataAuthMiddle, async (req: AuthenticatedRequest, res: Response): Promise<void> => {
    try {
        const { share } = req.body;

        // Check if userId exists after middleware (should always be present after auth)
        if (!req.userId) {
            console.error('Error: req.userId is missing in /brain/share endpoint.');
            res.status(401).json({ message: "Authentication required." });
            return; // IMPORTANT: Must return to prevent further execution
        }

        if (share) {
            // --- Path 1: share is true (create/get sharing link) ---
            
            const existingLink = await LinkSchema.findOne({ userId: req.userId });

            if (existingLink) {
                // --- Path 1a: Link already exists ---
                res.json({ hash: existingLink.hash });
                return; // IMPORTANT: Return to prevent further execution
            }

            // --- Path 1b: Link does not exist, create new ---
            const hash = Random(10);
            
            // FIX: Use lowercase 'userId' to match schema
            await LinkSchema.create({ 
                hash, 
                userId: req.userId // Changed from UserId to userId
            });
            
            res.json({ hash });
            return; // IMPORTANT: Return to prevent further execution
            
        } else {
            // --- Path 2: share is false (remove sharing link) ---
            
            const deleteResult = await LinkSchema.deleteOne({ userId: req.userId });
            
            if (deleteResult.deletedCount > 0) {
                res.json({ message: "Sharing link removed successfully" });
            } else {
                res.json({ message: "No sharing link found to remove" });
            }
            return; // IMPORTANT: Return to prevent further execution
        }
        
    } catch (error) {
        console.error("Error in /brain/share endpoint:", error);
        res.status(500).json({ message: "Internal server error" });
        return; // IMPORTANT: Return even in catch block
    }
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
