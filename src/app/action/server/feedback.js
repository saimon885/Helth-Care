"use server";

import { authOptions } from "@/lib/AuthOptions";
import { Collections, dbConnect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";

export const CreateFeedback = async (payload) => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };
  const newData = {
    payload,
  };
  const result = await dbConnect(Collections.Feedbacks).insertOne(newData);
  return { success: result.acknowledged };
};
export const GetFeedback = async () => {
  const result = await dbConnect(Collections.Feedbacks).find().toArray();
//   const sirializeFeedback = result.map((feedback) => ({
//     ...feedback,
//     _id: feedback._id.toString(),
//   }));
  return result;
};
