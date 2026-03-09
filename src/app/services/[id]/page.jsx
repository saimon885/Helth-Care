import { getSingleService } from "@/app/action/server/service";
import BookNowBtn from "@/Components/Buttons/BookNowBtn";

const page = async ({ params }) => {
  const { id } = await params;

  const service = await getSingleService(id);
  // console.log(service, id);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="relative w-full h-[400px]  rounded-xl overflow-hidden shadow-lg">
          <img
            src={service?.image}
            alt={service?.name}
            className="object-cover mx-auto "
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">{service?.name}</h1>

          <p className="text-gray-600 leading-relaxed">
            {service?.description}
          </p>

          {/* price */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-primary">
              ৳{service?.price_per_hour}
            </span>
            <span className="text-gray-500">/ hour</span>
          </div>

          {/* features */}
          <div className="bg-base-200 rounded-xl p-5 space-y-3">
            <h3 className="font-semibold text-lg">Service Features</h3>

            <ul className="space-y-2 text-gray-600">
              <li>✔ Professional trained caregiver</li>
              <li>✔ Background verified staff</li>
              <li>✔ Flexible hourly booking</li>
              <li>✔ Emergency support available</li>
              <li>✔ Safe & reliable service</li>
            </ul>
          </div>

          {/* action buttons */}

          <div className="flex gap-4 pt-4">
            <BookNowBtn id={service?._id}></BookNowBtn>

            <button className="btn btn-outline">Contact Provider</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
