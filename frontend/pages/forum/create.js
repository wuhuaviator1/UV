'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Navbar from '../../components/Navbar/Navbar'

export default function CreatePost() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    category: 'General',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    'General',
    'Announcements',
    'Academic',
    'Study Groups',
    'Events',
    'Campus Life',
    'Questions'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 这里添加发布帖子的逻辑
      console.log('Submitting post:', formData);
      // 模拟发布延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/forum');
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="create-post-page">
      <Navbar />
      <div className="create-post-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="create-post-content"
        >
          <div className="page-header">
            <Link href="/forum" className="back-button">
              ← Back to Forum
            </Link>
            <h1>Create New Post</h1>
          </div>

          <form onSubmit={handleSubmit} className="post-form">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter your post title"
                required
                maxLength={100}
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Write your post content here..."
                required
                rows={10}
              />
            </div>

            <div className="form-actions">
              <Link href="/forum">
                <button type="button" className="cancel-button">
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Publishing...' : 'Publish Post'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      <style jsx>{`
        .create-post-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f6f8fd 0%, #f1f4f9 100%);
          padding: 2rem;
        }

        .create-post-container {
          max-width: 900px;
          margin: 2rem auto;
          padding: 0 1rem;
        }

        .create-post-content {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .back-button {
          display: inline-block;
          color: #666;
          text-decoration: none;
          margin-bottom: 1rem;
          transition: color 0.3s ease;
        }

        .back-button:hover {
          color: #bfa2db;
        }

        h1 {
          color: #333;
          font-size: 2rem;
          margin: 0;
        }

        .post-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        label {
          color: #333;
          font-weight: 500;
        }

        input, select, textarea {
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: #bfa2db;
        }

        textarea {
          resize: vertical;
          min-height: 200px;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 1rem;
        }

        button {
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cancel-button {
          background: #f0f0f0;
          color: #666;
        }

        .cancel-button:hover {
          background: #e0e0e0;
        }

        .submit-button {
          background: #bfa2db;
          color: white;
        }

        .submit-button:hover {
          background: #a585c7;
        }

        .submit-button:disabled {
          background: #cccccc;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .create-post-page {
            padding: 1rem;
          }

          .create-post-content {
            padding: 1.5rem;
          }

          h1 {
            font-size: 1.5rem;
          }

          .form-actions {
            flex-direction: column;
          }

          button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
} 