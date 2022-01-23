import React, { useState } from "react";
import Line from "./Line";
import AOS from "aos";
import "aos/dist/aos.css";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [message, setMessage] = useState("");
  // const [posts, setPosts] = useState([]);
  const postsCollection = collection(db, "posts");
  // const usersCollection = collection(db, "users");

  // console.log(postsCollection);

  const handleCreatePosts = async (e) => {
    e.preventDefault();
    try {
      const newPost = await addDoc(postsCollection, {
        name: name,
        email: email,
        telephone: telephone,
        message: message,
      });
      console.log(newPost);
    } catch (error) {
      console.log(error);
    }
  };

  AOS.init({
    duration: 2000,
  });

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollection);
  //     console.log(data);
  //   };
  // }, [usersCollection]);

  return (
    <section className="text-gray-100 my-12" id="contact" data-aos="fade-up">
      <h1 className=" text-center text-4xl md:text-6xl py-12 mt-8 font-extrabold">
        CONTACT US
      </h1>
      <Line />
      <div className="mt-24 rounded-lg bg-orange-800 opacity-50 md:w-2/4  m-auto items-center justify-center p-12  border-2 border-red-700">
        <form
          onSubmit={handleCreatePosts}
          className="grid md:grid-cols-2 grid-cols-1 space-y-2 md:space-y-0 md:gap-2 "
        >
          <label className=" text-sm font-medium text-black col-span-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              placeholder="Full Name"
              className="placeholder:text-white opacity-100 text-white block bg-black w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            />
          </label>
          <label className="text-sm font-medium text-white col-span-2 md:col-span-1 ">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Email"
              className="placeholder:text-white opacity-100 text-white block bg-black w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            />
          </label>
          <label className="text-sm font-medium text-white ">
            <input
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              type="number"
              placeholder="Telephone (opt)"
              className="placeholder:text-white opacity-100 text-white block bg-black w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            />
          </label>
          <label className="text-sm font-medium text-white col-span-2">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              placeholder="Message"
              required
              className="placeholder:text-white opacity-100 text-white block bg-black w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            />
          </label>
          <label />
          <button
            type="submit"
            className="p-6 col-span-2 text-red-100 hover:bg-fuchsia-400 rounded-lg text-2xl bg-purple-900 hover:text-black"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
