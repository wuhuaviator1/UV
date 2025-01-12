'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar/Navbar'

export default function PostDetail() {
  const router = useRouter();
  const { id } = router.query;

  // 模拟帖子数据
  const [post, setPost] = useState({
    id: 1,
    title: 'Welcome to NYU Forum',
    author: 'Admin',
    category: 'Announcements',
    date: 'Jan 20, 2024',
    content: 'Welcome to the NYU Forum! This is a place where students can discuss various topics, share experiences, and help each other.',
    replies: [
      {
        id: 1,
        author: 'Student1',
        content: 'Thanks for creating this forum!',
        date: 'Jan 20, 2024',
        likes: 5,
        isLiked: false
      },
      {
        id: 2,
        author: 'Student2',
        content: 'Looking forward to engaging with everyone here.',
        date: 'Jan 20, 2024',
        likes: 3,
        isLiked: false
      }
    ]
  });

  const [newReply, setNewReply] = useState('');

  const handleSubmitReply = (e) => {
    e.preventDefault();
    // 添加新回复
    const newReplyObj = {
      id: post.replies.length + 1,
      author: 'Current User', // 这里应该是当前登录用户的名字
      content: newReply,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      likes: 0,
      isLiked: false
    };

    setPost(prev => ({
      ...prev,
      replies: [...prev.replies, newReplyObj]
    }));
    setNewReply('');
  };

  const handleLike = (replyId) => {
    setPost(prev => ({
      ...prev,
      replies: prev.replies.map(reply => {
        if (reply.id === replyId) {
          return {
            ...reply,
            likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
            isLiked: !reply.isLiked
          };
        }
        return reply;
      })
    }));
  };

  return (
    <div className="post-detail-page">
      <Navbar />
      <div className="post-detail-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="post-detail-content"
        >
          <div className="post-detail-header">
            <Link href="/forum" className="back-button">
              ← Back to Forum
            </Link>
            <div className="post-info">
              <h1>{post.title}</h1>
              <div className="post-meta">
                <span className="post-category">{post.category}</span>
                <span className="post-author">by {post.author}</span>
                <span className="post-date">{post.date}</span>
              </div>
            </div>
          </div>
          
          <div className="post-body">
            <p>{post.content}</p>
          </div>

          <div className="replies-section">
            <h2>Replies ({post.replies.length})</h2>
            
            <div className="reply-form">
              <form onSubmit={handleSubmitReply}>
                <textarea
                  value={newReply}
                  onChange={(e) => setNewReply(e.target.value)}
                  placeholder="Write your reply..."
                  required
                />
                <button type="submit" className="reply-button">
                  Post Reply
                </button>
              </form>
            </div>

            <div className="replies-list">
              {post.replies.map((reply) => (
                <div key={reply.id} className="reply-item">
                  <div className="reply-header">
                    <span className="reply-author">{reply.author}</span>
                    <span className="reply-date">{reply.date}</span>
                  </div>
                  <p className="reply-content">{reply.content}</p>
                  <div className="reply-actions">
                    <button 
                      className={`like-button ${reply.isLiked ? 'liked' : ''}`}
                      onClick={() => handleLike(reply.id)}
                    >
                      {reply.isLiked ? '❤️' : '🤍'} {reply.likes}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .post-detail-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f6f8fd 0%, #f1f4f9 100%);
          padding: 2rem;
        }

        .post-detail-container {
          max-width: 900px;
          margin: 2rem auto;
          padding: 0 1rem;
        }

        .post-detail-content {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }

        .post-detail-header {
          margin-bottom: 2rem;
        }

        .back-button {
          display: inline-block;
          color: #666;
          text-decoration: none;
          margin-bottom: 1.5rem;
          transition: color 0.3s ease;
        }

        .back-button:hover {
          color: #bfa2db;
        }

        .post-info h1 {
          color: #333;
          font-size: 2rem;
          margin: 0 0 1rem 0;
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

        .post-body {
          color: #333;
          line-height: 1.6;
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid #eee;
        }

        .replies-section h2 {
          color: #333;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .reply-form {
          margin-bottom: 2rem;
        }

        .reply-form textarea {
          width: 100%;
          min-height: 100px;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          margin-bottom: 1rem;
          font-size: 1rem;
          resize: vertical;
        }

        .reply-form textarea:focus {
          outline: none;
          border-color: #bfa2db;
        }

        .reply-button {
          padding: 0.8rem 1.5rem;
          background: #bfa2db;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .reply-button:hover {
          background: #a585c7;
        }

        .replies-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .reply-item {
          padding: 1.5rem;
          border: 1px solid #eee;
          border-radius: 12px;
          background: #fafafa;
        }

        .reply-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .reply-author {
          font-weight: 500;
          color: #333;
        }

        .reply-date {
          color: #666;
          font-size: 0.9rem;
        }

        .reply-content {
          color: #333;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .reply-actions {
          display: flex;
          justify-content: flex-end;
        }

        .like-button {
          padding: 0.5rem 1rem;
          background: white;
          border: 1px solid #ddd;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .like-button:hover {
          background: #fff5f5;
          border-color: #ffb3b3;
        }

        .like-button.liked {
          background: #fff5f5;
          border-color: #ffb3b3;
          color: #ff4d4d;
        }

        .like-button.liked:hover {
          background: #ffe6e6;
        }

        @media (max-width: 768px) {
          .post-detail-content {
            padding: 1.5rem;
          }

          .post-info h1 {
            font-size: 1.5rem;
          }

          .post-meta {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  )
}