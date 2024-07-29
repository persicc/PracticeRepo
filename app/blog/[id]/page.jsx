import { useParams } from "next/navigation";
import React, { useEffect } from "react";

function BlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const getBlog = async () => {
      const blog = await fetch(`/api/blog/${id}`);
      setBlog(...blog);
    };

    getBlog();
  }, [id]);

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogPage;
