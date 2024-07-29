import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { MediumContext } from "@/context/MediumContext";

export default function Home() {
  const { users } = useContext(MediumContext);
  const [blogs, setBlogs] = useState({});
  console.log(users);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("/api/blog/");
      setBlogs(...data);
    };
    getData();
  }, []);

  return (
    <div>
      <header>
        <div className="wrapper">
          <input className="search search--header" type="text" />
          <nav className="navbar">
            <Link className="navbar__link">Home</Link>
            <Link className="navbar__link">About</Link>
            <Link className="navbar__link button">Contact</Link>
          </nav>
        </div>
      </header>

      <section>
        <div className="grid col-span-3">
          {blogs.map((blog, index) => (
            <Link key={blog.id + index} href={`/blog/${blog.id}`}>
              <div className="card">
                <h1>{blog.title}</h1>
                <p>{blog.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
