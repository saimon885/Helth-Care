import { getSingleService } from "@/app/action/server/service";
import BookNowBtn from "@/Components/Buttons/BookNowBtn";
import ClientReview from "@/Components/Pages/ClientReview";
import { MdOutlineRateReview } from "react-icons/md";
import Link from "next/link";
import { BiLeftArrow } from "react-icons/bi";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = await getSingleService(id);

  return {
    title: service?.title || "Details",
    description: service?.description || "",
    openGraph: {
      title: service?.title || "Details",
      description: service?.description || "",
      images: [
        {
          url: service?.image || "https://i.ibb.co.com/Sw0Nj2Z6/image.png ",
          width: 1200,
          height: 630,
          alt: service?.title || "service Image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service?.title || "Details",
      description: service?.description || "",
      images: [service?.image || "https://i.ibb.co.com/Sw0Nj2Z6/image.png "],
    },
  };
}

const page = async ({ params }) => {
  const { id } = await params;
  const service = await getSingleService(id);

  return (
    <div className="max-w-7xl mx-auto px-4 pt-8">
      <div className="mb-6">
        <Link
          href="/services"
          className="inline-flex font-bold items-center gap-2 text-primary  hover:underline"
        >
          <BiLeftArrow></BiLeftArrow> Back
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-start mb-8">
        <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl group">
          <img
            src={service?.image}
            alt={service?.name}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="badge badge-primary p-3 font-semibold shadow-md">
              Top Rated
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
            {service?.name}
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed">
            {service?.description}
          </p>

          <div className="flex items-center gap-3 bg-primary/5 w-fit px-4 py-2 rounded-lg">
            <span className="text-4xl font-black text-primary">
              ৳{service?.price_per_hour}
            </span>
            <span className="text-slate-500 font-medium text-lg">/ hour</span>
          </div>

          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 space-y-4">
            <h3 className="font-bold text-xl flex items-center gap-2">
              <MdOutlineRateReview className="text-primary" /> Service Features
            </h3>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700">
              <li className="flex items-center gap-2">
                ✔ Professional caregiver
              </li>
              <li className="flex items-center gap-2">✔ Background verified</li>
              <li className="flex items-center gap-2">✔ Flexible hours</li>
              <li className="flex items-center gap-2">✔ Emergency support</li>
              <li className="flex items-center gap-2">✔ Safe & reliable</li>
              <li className="flex items-center gap-2">✔ 24/7 Monitoring</li>
            </ul>
          </div>

          <div className="pt-4">
            <BookNowBtn id={service?._id} />
          </div>
        </div>
      </div>

      <hr className="border-slate-100 mb-16" />

      <ClientReview service={service}></ClientReview>
    </div>
  );
};

export default page;
