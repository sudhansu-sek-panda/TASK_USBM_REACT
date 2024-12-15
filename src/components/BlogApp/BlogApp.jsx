import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BlogApp.css';

const PostList = ({ onSelectPost }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch posts.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="post-list">
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.body.substring(0, 100)}...</p>
          <button onClick={() => onSelectPost(post.id)}>Read More</button>
        </div>
      ))}
    </div>
  );
};

const PostDetail = ({ postId, onBack }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch post details.');
        setLoading(false);
      });
  }, [postId]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={onBack}>Back to Posts</button>
    </div>
  );
};

const BlogApp = () => {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (id) => {
    setSelectedPostId(id);
  };

  const handleBackToPosts = () => {
    setSelectedPostId(null);
  };

  return (
    <div className="app">
      {selectedPostId ? (
        <PostDetail postId={selectedPostId} onBack={handleBackToPosts} />
      ) : (
        <PostList onSelectPost={handleSelectPost} />
      )}
    </div>
  );
};

export default BlogApp;
