import { getSingleService } from "@/app/action/server/service";
import BookingPage from "@/Components/Pages/BookingPage";
import React from "react";

const boodingdetails = async ({ params }) => {
  const { id } = await params;
  const data = await getSingleService(id);
  //   console.log(data);
  return (
    <div>
      <BookingPage booking={data}></BookingPage>
    </div>
  );
};

export default boodingdetails;
