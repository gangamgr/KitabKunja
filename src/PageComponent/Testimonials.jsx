// Testimonials.tsx
import React, { useEffect, useState } from "react";
import axios from "../HOC/Axios/axios";
import candle2 from "../Resources/candle2.jpg";

// interface Testimonial {
//   id: number;
//   name: string;
//   imageUrl: string;
//   message: string;
// }

function Testimonials() {
  const data = [
    {
      image: candle2,
      name: "Ram Kapoor",
      message:
        " Nepal is a landlocked country in South Asia and is bordered by China and India. It is located in the Himalayas and contains eight of the world's ten highest peaks.",
    },
    {
      image: "",
      name: "Ram Kapoor",
      message:
        "China,[i] officially the People's Republic of China (PRC),[j] is a country in East Asia. With a population exceeding 1.4 billion, it is the world's second-most populous country after India",
    },
    {
      image: "",
      name: "Ram Kapoor",
      message:
        "China,[i] officially the People's Republic of China (PRC),[j] is a country in East Asia. With a population exceeding 1.4 billion, it is the world's second-most populous country after India",
    },
  ];

  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch testimonials from the backend
  const fetchTestimonials = async () => {
    try {
      const response = await axios.get("/api/testimonials");
      if (response.status === 200) {
        setTestimonials(response.data);
        setLoading(false);
      }
    } catch (err) {
      setError("Failed to fetch testimonials.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Render loading, error, or the testimonials
  return (
    <div className="">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-10">
        Testimonials
      </h2>
      {/* <p className="text-xl text-black">
        The expense windows adapted sir. Wrong widen drawn ample eat off doors
        money.
      </p> */}
      {loading && <p>Loading testimonials...</p>}
      {/* {error && <p>{error}</p>} */}
      <div className="flex justify-center gap-10 mt-5">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-emerald-100 p-5 shadow-lg w-96 items-center rounded-lg"
          >
            <img
              src={item.image}
              //   alt={item.name}
              className="rounded-full w-20 bg-white h-20 object-cover "
            />
            <h3 className="font-semibold text-xl p-2">{item.name}</h3>
            <p className="p-2">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
