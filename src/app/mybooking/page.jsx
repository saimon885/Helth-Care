import React from "react";
import { getmyBooking } from "../action/server/booking";
import MyBookingCard from "@/Components/Card/MyBookingCard";

const page = async () => {
  const data = await getmyBooking();
  // console.log(data);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold my-5 text-primary">My <span className="text-secondary">Bookings</span></h1>
      {data?.length == 0 && <p>No bookings found.</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map((book) => (
          <MyBookingCard book={book} key={book._id}></MyBookingCard>
        ))}
      </div>
    </div>
  );
};

export default page;
