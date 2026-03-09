"use client";
import React, { useState, useEffect } from "react";
import divisionDataJson from "../../data/district.json";
import { useForm, useWatch } from "react-hook-form";
import { createBooking } from "@/app/action/server/booking";

const BookingPage = ({ booking }) => {
  const { register, control, handleSubmit } = useForm();
  const [totalCost, setTotalCost] = useState(0);

  const serviceCenter = divisionDataJson;
  const Regions = [...new Set(serviceCenter.map((c) => c.region))];

  const bookingRegion = useWatch({ control, name: "bookingRegion" });
  const bookingDistrict = useWatch({ control, name: "bookingDistrict" });
  const bookingDuration = useWatch({ control, name: "duration" });

  const getDistricts = (region) => {
    if (!region) return [];
    const filtered = serviceCenter.filter((r) => r.region === region);
    return [...new Set(filtered.map((d) => d.district))];
  };

  const getUpazilas = (district) => {
    if (!district) return [];
    const filtered = serviceCenter.filter((d) => d.district === district);
    const upazilas = filtered.flatMap((f) => f.covered_area);
    return upazilas;
  };

  useEffect(() => {
    if (!bookingDuration) {
      setTotalCost(0);
      return;
    }

    let cost = 0;
    if (bookingDuration.includes("Hour")) {
      const hours = Number(bookingDuration.split(" ")[0]);
      cost = hours * booking.price_per_hour;
    } else if (bookingDuration.includes("Day")) {
      const days = Number(bookingDuration.split(" ")[0]);
      cost = days * 8 * booking.price_per_hour;
    }
    setTotalCost(cost);
  }, [bookingDuration, booking.price_per_hour]);

  const onSubmit = async (data) => {
    const bookingData = {
      duration: data.duration,
      region: data.bookingRegion,
      district: data.bookingDistrict,
      upazila: data.bookingUpazila,
      address: data.address,
      totalCost,
      Service_Name: booking.name,
    };

    console.log("Booking Data:", bookingData);

    const result = await createBooking({ bookingData });

    if (result.success) {
      alert("Booking added successfully");
    } else {
      console.log("Error creating booking");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{booking.name}</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-xl p-6 space-y-6"
      >
        <div>
          <label className="block font-medium mb-2">Select Duration</label>
          <select
            className="select select-bordered w-full"
            {...register("duration", { required: true })}
          >
            <option value="">Select Hours / Days</option>
            <option>2 Hours</option>
            <option>4 Hours</option>
            <option>6 Hours</option>
            <option>1 Day</option>
            <option>2 Days</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-2">Division</label>
            <select
              {...register("bookingRegion", { required: true })}
              defaultValue=""
              className="select w-full"
            >
              <option disabled value="">
                Pick a Division
              </option>
              {Regions.map((r, i) => (
                <option value={r} key={i}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium mb-2">District</label>
            <select
              {...register("bookingDistrict", { required: true })}
              defaultValue=""
              className="select w-full"
            >
              <option disabled value="">
                Pick a District
              </option>
              {getDistricts(bookingRegion).map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="full">
          <label className="block font-medium mb-2">Upazila</label>
          <select
            {...register("bookingUpazila", { required: true })}
            defaultValue=""
            className="select w-full"
          >
            <option disabled value="">
              Pick an Upazila
            </option>
            {getUpazilas(bookingDistrict).map((u, i) => (
              <option key={i} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-2">Full Address</label>
          <textarea
            {...register("address", { required: true })}
            className="textarea textarea-bordered w-full"
            placeholder="Enter full address"
          ></textarea>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
          <p className="font-semibold">Total Cost</p>
          <p className="text-lg font-bold text-primary">{totalCost} Tk</p>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
