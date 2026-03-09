"use server";

import { authOptions } from "@/lib/AuthOptions";
import { Collections, dbConnect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";

export const createBooking = async ({ bookingData }) => {
  const {
    duration,
    region,
    district,
    upazila,
    address,
    totalCost,
    Service_Name,
  } = bookingData;
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };
  const newBooking = {
    duration,
    region,
    district,
    upazila,
    address,
    totalCost,
    email: user?.email,
    status: "pending",
    createdAt: new Date(),
    Service_Name,
  };

  const createResult = await dbConnect(Collections.Booking).insertOne(
    newBooking,
  );
  return { success: !!createResult.insertedId };
};
export const getmyBooking = async () => {
  const { user } = (await getServerSession(authOptions)) || {};
  if (!user) return { success: false };
  const query = { email: user?.email };
  const findBooking = await dbConnect(Collections.Booking)
    .find(query)
    .toArray();
  const Getbook = findBooking.map((book) => ({
    ...book,
    _id: book._id.toString(),
  }));

  return Getbook;
};
