import { motion } from "framer-motion";

export default function CourseCard({
title,
description,
image,
icon,
}) {
return (
<motion.div
whileHover={{
scale: 1.03,
y: -8,
}}
transition={{
duration: 0.25,
}}
className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
>
{image && ( <img
       src={image}
       alt={title}
       className="h-56 w-full object-cover"
     />
)}


  <div className="p-6">
    {icon && (
      <div className="mb-4 text-3xl">
        {icon}
      </div>
    )}

    <h3 className="font-heading text-2xl font-semibold">
      {title}
    </h3>

    <p className="mt-3 text-gray-600">
      {description}
    </p>

    <button className="mt-6 rounded-xl bg-[var(--primary)] px-5 py-2 text-white transition-all duration-300 hover:opacity-90">
      Learn More
    </button>
  </div>
</motion.div>


);
}
