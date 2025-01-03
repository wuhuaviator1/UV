import posts from '../posts';

export default function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  // 查找指定ID的帖子
  const postId = parseInt(id);
  const postIndex = posts.findIndex(p => p.id === postId);

  if (postIndex === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }

  switch (method) {
    case 'GET':
      // 获取回复列表
      try {
        const replies = posts[postIndex].replies || [];
        res.status(200).json(replies);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch replies' });
      }
      break;

    case 'POST':
      // 添加新回复
      try {
        const { content, author } = req.body;

        if (!content || !author) {
          return res.status(400).json({ error: 'Missing required fields' });
        }

        const newReply = {
          id: (posts[postIndex].replies?.length || 0) + 1,
          content,
          author,
          date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          }),
          likes: 0,
          isLiked: false
        };

        // 确保replies数组存在
        if (!posts[postIndex].replies) {
          posts[postIndex].replies = [];
        }

        // 添加新回复
        posts[postIndex].replies.push(newReply);
        
        // 更新回复数量
        posts[postIndex].replies = (posts[postIndex].replies || 0) + 1;

        res.status(201).json(newReply);
      } catch (error) {
        res.status(500).json({ error: 'Failed to add reply' });
      }
      break;

    case 'PUT':
      // 更新回复（点赞/取消点赞）
      try {
        const { replyId } = req.body;
        const replyIndex = posts[postIndex].replies.findIndex(r => r.id === replyId);

        if (replyIndex === -1) {
          return res.status(404).json({ error: 'Reply not found' });
        }

        // 切换点赞状态
        const reply = posts[postIndex].replies[replyIndex];
        reply.isLiked = !reply.isLiked;
        reply.likes += reply.isLiked ? 1 : -1;

        res.status(200).json(reply);
      } catch (error) {
        res.status(500).json({ error: 'Failed to update reply' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
} 