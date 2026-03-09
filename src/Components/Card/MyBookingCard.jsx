import React from "react";

const MyBookingCard = ({ book }) => {
  const {
    Service_Name,
    duration,
    region,
    district,
    upazila,
    address,
    totalCost,
    email,
    status,
    createdAt,
  } = book;

  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800",
    completed: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  };

  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-6 mb-4 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{Service_Name}</h3>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[status] || "bg-gray-100 text-gray-800"}`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      <div className="mb-3 text-gray-700">
        <p>
          <span className="font-medium">Duration:</span> {duration}
        </p>
        <p>
          <span className="font-medium">Location:</span> {upazila}, {district},{" "}
          {region}
        </p>
        <p>
          <span className="font-medium">Address:</span> {address}
        </p>
        <p>
          <span className="font-medium">Email:</span> {email}
        </p>
        <p>
          <span className="font-medium">Total Cost:</span> ৳ { totalCost}
        </p>
        <p>
          <span className="font-medium">Booking Date:</span>{" "}
          {new Date(createdAt).toLocaleString()}
        </p>
      </div>

      <div className="mt-4 flex justify-end">
        {status === "pending" && (
          <button className="btn btn-sm btn-primary">Pay Now</button>
        )}
        {status === "completed" && (
          <button className="btn btn-sm btn-success" disabled>
            Completed
          </button>
        )}
        {status === "cancelled" && (
          <button className="btn btn-sm btn-error" disabled>
            Cancelled
          </button>
        )}
      </div>
    </div>
  );
};

export default MyBookingCard;
