'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from '../components/Navbar/Navbar'

export default function Forum() {
  const router = useRouter();
  // 模拟论坛帖子数据
  const [posts] = useState([
    {
      id: 1,
      title: 'Welcome to NYU Forum',
      author: 'Admin',
      category: 'Announcements',
      date: 'Jan 20, 2024',
      replies: 15,
      views: 234,
      pinned: true
    },
    {
      id: 2,
      title: 'Course Registration Tips for Spring 2024',
      author: 'Academic Advisor',
      category: 'Academic',
      date: 'Jan 19, 2024',
      replies: 28,
      views: 456,
      pinned: true
    },
    {
      id: 3,
      title: 'Looking for Study Group - Data Structures',
      author: 'CS Student',
      category: 'Study Groups',
      date: 'Jan 18, 2024',
      replies: 8,
      views: 123
    },
    {
      id: 4,
      title: 'Campus Events This Week',
      author: 'Event Coordinator',
      category: 'Events',
      date: 'Jan 17, 2024',
      replies: 12,
      views: 345
    }
  ]);

  const categories = [
    'All',
    'Announcements',
    'Academic',
    'Study Groups',
    'Events',
    'Campus Life',
    'Questions'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handlePostClick = (postId) => {
    router.push(`/forum/${postId}`);
  };

  return (
    <div className="forum-page">
      <Navbar />
      <div className="forum-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="forum-content"
        >
          <div className="forum-header">
            <h1>Forum</h1>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="forum-main">
            <div className="categories">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="posts-section">
              <div className="posts-header">
                <Link href="/forum/create">
                  <button className="new-post-btn">New Post</button>
                </Link>
              </div>

              <div className="posts-list">
                {posts.map((post) => (
                  <div 
                    key={post.id}
                    className={`post-item ${post.pinned ? 'pinned' : ''}`}
                    onClick={() => handlePostClick(post.id)}
                  >
                    {post.pinned && <div className="pin-indicator">📌</div>}
                    <div className="post-main">
                      <h3 className="post-title">{post.title}</h3>
                      <div className="post-meta">
                        <span className="post-category">{post.category}</span>
                        <span className="post-author">by {post.author}</span>
                        <span className="post-date">{post.date}</span>
                      </div>
                    </div>
                    <div className="post-stats">
                      <div className="stat">
                        <span className="stat-number">{post.replies}</span>
                        <span className="stat-label">Replies</span>
                      </div>
                      <div className="stat">
                        <span className="stat-number">{post.views}</span>
                        <span className="stat-label">Views</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .forum-page {
          min-height: calc(100vh - 200px);
          background: linear-gradient(135deg, #f6f8fd 0%, #f1f4f9 100%);
          padding: 2rem;
        }

        .forum-container {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 1rem;
        }

        .forum-content {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }

        .forum-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .forum-header h1 {
          color: #333;
          font-size: 2rem;
          margin: 0;
        }

        .search-bar input {
          padding: 0.8rem 1.2rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          width: 300px;
          font-size: 1rem;
        }

        .search-bar input:focus {
          outline: none;
          border-color: #bfa2db;
        }

        .categories {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          overflow-x: auto;
          padding-bottom: 1rem;
        }

        .category-btn {
          padding: 0.6rem 1.2rem;
          border: 1px solid #ddd;
          border-radius: 20px;
          background: white;
          color: #666;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .category-btn.active {
          background: #bfa2db;
          color: white;
          border-color: #bfa2db;
        }

        .category-btn:hover {
          background: #f5f5f5;
        }

        .category-btn.active:hover {
          background: #a585c7;
        }

        .posts-header {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 1.5rem;
        }

        .new-post-btn {
          padding: 0.8rem 1.5rem;
          background: #bfa2db;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .new-post-btn:hover {
          background: #a585c7;
        }

        .posts-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .post-item {
          display: flex;
          align-items: center;
          padding: 1.5rem;
          border: 1px solid #eee;
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          cursor: pointer;
        }

        .post-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          border-color: #bfa2db;
        }

        .post-item.pinned {
          background: #fff9e6;
          border-color: #ffe0b2;
        }

        .pin-indicator {
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-size: 1.2rem;
        }

        .post-main {
          flex: 1;
        }

        .post-title {
          color: #333;
          font-size: 1.2rem;
          margin: 0 0 0.5rem 0;
        }

        .post-meta {
          display: flex;
          gap: 1rem;
          color: #666;
          font-size: 0.9rem;
        }

        .post-category {
          color: #bfa2db;
          font-weight: 500;
        }

        .post-stats {
          display: flex;
          gap: 2rem;
          margin-left: 2rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          color: #333;
          font-weight: 500;
        }

        .stat-label {
          color: #666;
          font-size: 0.8rem;
        }
      `}</style>
    </div>
  );
}