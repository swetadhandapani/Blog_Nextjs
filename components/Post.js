"use client";  // Use client-side hooks

import { useEffect, useState } from "react";

export default function Post({ id }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the post data based on the passed id
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
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
     
    </div>
  );
}
