import posts from './posts';

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  // 查找指定ID的帖子
  const postId = parseInt(id);
  const postIndex = posts.findIndex(p => p.id === postId);

  switch (method) {
    case 'GET':
      // 获取单个帖子详情
      try {
        if (postIndex === -1) {
          return res.status(404).json({ error: 'Post not found' });
        }

        // 增加浏览量
        posts[postIndex].views += 1;

        res.status(200).json(posts[postIndex]);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch post' });
      }
      break;

    case 'PUT':
      // 更新帖子
      try {
        if (postIndex === -1) {
          return res.status(404).json({ error: 'Post not found' });
        }

        const { title, content, category } = req.body;
        
        // 更新帖子内容
        posts[postIndex] = {
          ...posts[postIndex],
          title: title || posts[postIndex].title,
          content: content || posts[postIndex].content,
          category: category || posts[postIndex].category,
        };

        res.status(200).json(posts[postIndex]);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update post' });
      }
      break;

    case 'DELETE':
      // 删除帖子
      try {
        if (postIndex === -1) {
          return res.status(404).json({ error: 'Post not found' });
        }

        posts.splice(postIndex, 1);
        res.status(200).json({ message: 'Post deleted successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to delete post' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
} 