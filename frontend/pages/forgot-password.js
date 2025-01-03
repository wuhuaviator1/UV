import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 这里添加重置密码逻辑
    console.log('Password reset attempt for:', email);
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h1>Forgot Password</h1>
        <p>Enter your email address to reset your password.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
        <div className="links">
          <Link href="/login">Back to Login</Link>
        </div>
      </div>
      <style jsx>{`
        .forgot-password-page {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f5f5f5;
        }
        .forgot-password-container {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }
        h1 {
          text-align: center;
          margin-bottom: 1rem;
        }
        p {
          text-align: center;
          margin-bottom: 2rem;
          color: #666;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
        }
        input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        button {
          width: 100%;
          padding: 0.75rem;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 1rem;
        }
        button:hover {
          background-color: #0051cc;
        }
        .links {
          margin-top: 1rem;
          text-align: center;
        }
        .links a {
          color: #0070f3;
          text-decoration: none;
        }
        .links a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
} 