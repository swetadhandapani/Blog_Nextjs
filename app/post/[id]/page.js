"use client"; // Ensure this is a client-side component

import { useEffect, useState } from "react";


export default function Post({ params }) {
  // Await params before using its properties
  const { id } = params || {};

  const [post, setPost] = useState(null);

  useEffect(() => {
    // Only attempt to fetch if the id is available
    if (id) {
      const fetchPostData = async () => {
        try {
          const response = await fetch(`/api/post/${id}`);
          const data = await response.json();
          setPost(data);
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      };

      fetchPostData();
    }
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <main class="container mx-auto px-4 py-6">
      <h2 class="text-4xl font-bold mb-4">{post.title}</h2>
      <p class="text-gray-500">Published on {post.created_at_formatted}</p>
      <img
        width={300}
        height={200}
        src={post.image}
        alt="Post Image"
        class="my-4"
      />
      <p>{post.description}</p>
    </main>
  );
}
