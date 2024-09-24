import React,{useState} from 'react';
import collection from '../Resources/collection.jpg';
import axios from "../HOC/Axios/axios";
import {useForm} from "react-hook-form";

const Contact = () => {
  const [loading, setLoading]=useState(false);
  const [success,setSuccess]=useState<string[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data:any) => {
    try {
      setLoading(true);
      await axios
        .post(`${process.env.Url}/contact/create`, {
          full_name: data.full_name,
          phone: data.phone,
          email: data.email,
          message: data.message,
        })
        .then((res) => {
          setSuccess(res.data.msg);

          setLoading(false);
          setTimeout(() => {
            // setSuccess("");
          }, 4000);
          reset();
        });
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className=" mt-8 p-8 lg:p-12">
      {/* Main Container for Form and Map */}
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Left Side - Contact Info and Form */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-4">Contact Info</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-red-600 mr-2">📍</span>
                <p>
                  <strong>Address</strong> <br />
                  160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 mr-2">📞</span>
                <p>
                  <strong>Phone</strong> <br />
                  125-711-811 | 125-668-886
                </p>
              </div>
              <div className="flex items-center">
                <span className="text-red-600 mr-2">📧</span>
                <p>
                  <strong>Support</strong> <br />
                  Support.photography@gmail.com
                </p>
              </div>
            </div>
          </div>

          {/* Send Message Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Send Message</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-red-600"
                  {...register("full_name", { required: true })}
                />
                 {errors.full_name && (
              <span className="text-red-600 ">Full name is required</span>
            )}
              </div>
          
              <div>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-red-600"
                  {...register("phone", { required: true })}

                />
                  {errors.phone && (
              <span className="text-red-600 ">Phone is required</span>
            )}
              </div>

              <div>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-red-600"
                  {...register("email",{required:true})}
                />
              </div>

              
              {/* <div>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-red-600"
                  {...register("phone", { required: true })}

                />
                  {errors.phone && (
              <span className="text-red-600 ">Phone is required</span>
            )}
              </div> */}
              <div>
                <textarea
                  placeholder="Message"
                  // type="text"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-red-600 h-32"
                  {...register("message", { required: true })}
                />
                 {errors.message && (
              <span className="text-red-600 ">Message is required</span>
            )}
             {success.length > 0 ? (
            <p className="bg-green-600 p-2 font-openSansSix rounded-md text-white my-4">
              Your Message has been submited successfully ! Our Team will
              connect with you soon. Thank you for your message.
            </p>
          ) : (
            ""
          )}
          {/* <input
            type="submit"
            value={loading ? "LOADING..." : "SUBMIT"}
            className="btn-primary font-openSansSix rounded-md my-8 cursor-pointer "
          /> */}
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="w-full lg:w-1/2 lg:ml-12 mt-12 lg:mt-0">
          <iframe
            className="w-full min-h-[450px] lg:min-h-[650px] border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24385.052256421207!2d-74.10597!3d41.01112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e47bcb1dbe3f%3A0xa9b948bd0077fa7c!2sSaddle%20River%2C%20NJ%2007458%2C%20USA!5e0!3m2!1sen!2sin!4v1695137202056!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Photo Grid at the Bottom - No Gap, 4 in a row */}
      <div className="mt-8 ">
        <div className="grid grid-cols-4 gap-0">
          {/* Image 1 */}
          <div className="h-64">
            <img
             src={collection}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 2 */}
          <div className="h-64">
            <img
              src={collection}
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 3 */}
          <div className="h-64">
            <img
               src={collection}
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Image 4 */}
          <div className="h-64">
            <img
             src={collection}
              alt="Image 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;