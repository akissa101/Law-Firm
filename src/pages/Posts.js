import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  const deletePost = async () => {};

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      // const data = onSnapshot(collection(db, "posts"), (snapshot) => {
      //   setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log(snapshot.docs);
    };
    getPosts();
  }, [postsCollectionRef]);

  return (
    <div className="container m-auto">
      <h1 className="text-black text-3xl font-extrabold text-center py-8">
        THIS IS THE POSTS COLLECTED
      </h1>
      <div className="text-black text-2xl">
        <div class="table w-full ...">
          <div class="table-header-group bg-black text-white p-4">
            <div class="table-row">
              <div class="table-cell text-left p-4 ">Full Name</div>
              <div class="table-cell text-left p-4 ">Email</div>
              <div class="table-cell text-left p-4 ">Telephone</div>
              <div class="table-cell text-left p-4 ">Message</div>
              <div class="table-cell text-left p-4 ">Action</div>
            </div>
          </div>
          <div class="table-row-group">
            {posts.map((post) => (
              <div class="table-row">
                <div class="table-cell  p-2">{post.name}</div>
                <div class="table-cell  p-2">{post.email}</div>
                <div class="table-cell  p-2">{post.telephone}</div>
                <div class="table-cell  p-2">{post.message}</div>
                <div className="">
                  <button
                    onClick={deletePost}
                    type="submit"
                    className="border bg-red-700 text-white text-sm py-1 px-6 mt-2 rounded-xl"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
