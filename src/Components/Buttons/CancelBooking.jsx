"use client";
import { RiDeleteBin5Line } from "react-icons/ri";
import { DeleteBooking, UpdateBooking } from "@/app/action/server/booking";
import React from "react";
import Swal from "sweetalert2";

const CancelBooking = ({ book }) => {
  // Object destructuring thik korun { id }

  const bookingCancel = async () => {
    // Confirm korar jonno Swal
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    });

    if (confirm.isConfirmed) {
      const result = await UpdateBooking(book._id);

      if (result?.success) {
        Swal.fire({
          title: "Cancelled!",
          text: "Your booking has been cancelled.",
          icon: "success",
          timer: 1500,
        });
        // refresh the page to see changes
        // window.location.reload();
      } else {
        Swal.fire("Error", "Could not cancel booking", "error");
      }
    }
  };
  const deleteBook = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to Delete this booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete it!",
    });

    if (confirm.isConfirmed) {
      const result = await DeleteBooking(book._id);

      if (result.success) {
        Swal.fire({
          title: "Cancelled!",
          text: "Your booking has been Deleted.",
          icon: "success",
          timer: 1500,
        });
        // window.location.reload();
      } else {
        Swal.fire("Error", "Could not delete booking", "error");
      }
    }
  };

  return (
    <div>
      <button
        onClick={deleteBook}
        className="btn btn-sm btn-outline text-error mr-3 font-medium shadow-lg  transform transition"
      >
        <RiDeleteBin5Line size={20} />
      </button>
      {book.status == "cancelled" ? (
        ""
      ) : (
        <button
          onClick={bookingCancel}
          className="btn btn-sm mr-3 text-white btn-error"
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default CancelBooking;
