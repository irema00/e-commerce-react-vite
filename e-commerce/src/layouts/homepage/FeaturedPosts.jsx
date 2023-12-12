import React from "react";
import { useData } from "../../contexts/DataContext";

export default function FeaturedPosts() {
  const { featuredPostsData } = useData();
  return (
    <div>
      <h1>{featuredPostsData.topTitle}</h1>
      <h2>{featuredPostsData.title}</h2>
      <p>{featuredPostsData.description}</p>
      <div>
        {featuredPostsData.posts.map((post) => (
          <div key={post.id}>
            {post.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
            <img src={post.imageUrl} alt={post.title} />
            <div>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>{post.date}</p>
              <p>{post.commentsCount} comments</p>
              <a href={post.learnMoreUrl}>Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
