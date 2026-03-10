"use client";
import { CreateFeedback } from "@/app/action/server/feedback";
import React from "react";
import { useForm } from "react-hook-form";

const ClientReview = ({ service }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      rating: "4",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    const payload = {
      serviceId: service?._id,
      serviceName: service?.name,
      rating: data.rating,
      message: data.message,
      submittedAt: new Date().toISOString(),
    };
    const result = await CreateFeedback(payload);
    if (result.success) {
      alert("comment added");
    }
    // reset();
  };

  return (
    <div className="w-full mt-16">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-2 bg-slate-50 p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Leave a Review
            </h3>
            <p className="text-slate-500 text-lg leading-relaxed">
              Your feedback helps us improve our care services. Share your
              experience with our community.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <p className="text-sm font-medium text-slate-600 underline">
                Join 500+ happy clients
              </p>
            </div>
          </div>

          <div className="md:col-span-3 p-8 lg:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wider">
                    Overall Rating
                  </label>
                  <div className="rating rating-lg gap-1">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <input
                        key={num}
                        type="radio"
                        value={num}
                        {...register("rating")}
                        className="mask mask-star-2 bg-orange-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-400 italic sm:text-right">
                  Your email address will not be published.
                </p>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold text-slate-700 uppercase tracking-wider">
                    Your Message
                  </span>
                </label>
                <textarea
                  {...register("message", { required: true, minLength: 10 })}
                  className={`textarea textarea-bordered h-40 w-full text-lg focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none transition-all resize-none ${
                    errors.message ? "border-error" : ""
                  }`}
                  placeholder="Tell us what you liked or how we can improve..."
                ></textarea>
                {errors.message && (
                  <span className="text-error text-xs mt-1">
                    Please write at least 10 characters.
                  </span>
                )}
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg transform transition"
                >
                  Post Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
