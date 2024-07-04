import React from "react";
function getBlogs() {
  const blogs = [
    {
      programming: ["c-programming", "java", "c++", "python"],
    },
    {
      fashion: ["shoes", "belt", "shirts"],
    },
    {
      tech: ["mobile", "earphone", "laptop"],
    },
  ];
  return blogs;
}

export default function BlogsCatchAll(props: { params: { slug: string[] } }) {
  // const slug = props.params.slug;
  // if (slug[0] === "programming") return <div>Blogs related to programming</div>;
  // if (slug[0] === "fashion" && slug[1] === "men")
  //   return <div>Blogs related to fashion for men</div>;
  // if (slug[0] === "fashion" && slug[1] === "women")
  //   return <div>Blogs related to fashion for women</div>;
  // return <div>Catch all {props.params.slug[0]}</div>;
  const slug = props.params.slug;
  const blogs = getBlogs();
  blogs.map((category, index) => console.log(category[slug[0]]));
  return (
    <div>
      {blogs.map((category:any, index) => (
        <ul key={index}>
          {category[slug[0]]?.map((item:string) => (
            <li
              key={item}
              className="p-5 bg-white rounded text-blue-500 w-max  my-3"
            >
              {item}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
