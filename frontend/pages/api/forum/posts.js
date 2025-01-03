// 模拟数据库中的帖子数据
let posts = [
  {
    id: 1,
    title: 'Welcome to NYU Forum',
    author: 'Admin',
    category: 'Announcements',
    date: 'Jan 20, 2024',
    content: 'Welcome to the NYU Forum! This is a place where students can discuss various topics.',
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
    content: 'Here are some important tips for course registration...',
    replies: 28,
    views: 456,
    pinned: true
  }
];

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // 获取帖子列表
      try {
        const { category, search } = req.query;
        let filteredPosts = [...posts];

        // 按分类筛选
        if (category && category !== 'All') {
          filteredPosts = filteredPosts.filter(post => post.category === category);
        }

        // 按搜索词筛选
        if (search) {
          const searchLower = search.toLowerCase();
          filteredPosts = filteredPosts.filter(post => 
            post.title.toLowerCase().includes(searchLower) ||
            post.content.toLowerCase().includes(searchLower)
          );
        }

        res.status(200).json(filteredPosts);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
      }
      break;

    case 'POST':
      // 创建新帖子
      try {
        const { title, category, content, author } = req.body;

        // 验证必填字段
        if (!title || !category || !content || !author) {
          return res.status(400).json({ error: 'Missing required fields' });
        }

        // 创建新帖子对象
        const newPost = {
          id: posts.length + 1,
          title,
          category,
          content,
          author,
          date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }),
          replies: 0,
          views: 0,
          pinned: false
        };

        // 添加到帖子列表
        posts.push(newPost);

        res.status(201).json(newPost);
      } catch (error) {
        res.status(500).json({ error: 'Failed to create post' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
} 