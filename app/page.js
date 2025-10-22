import pool from '@/lib/db';
import { initializeDatabase } from '@/lib/initDb';
import PostsPage from './components/PostsPage';

// Mark page as dynamic to avoid build-time database access
export const dynamic = 'force-dynamic';

async function getPosts() {
  try {
    // Initialize database
    await initializeDatabase();

    const [posts] = await pool.query(`
      SELECT 
        posts.id,
        posts.body,
        posts.createdAt,
        posts.authorId,
        users.handle as authorHandle,
        users.name as authorName
      FROM posts
      JOIN users ON posts.authorId = users.id
      ORDER BY posts.createdAt DESC
    `);

    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Earth Link</h1>
          <p className="text-gray-600">Share your thoughts with the world</p>
        </header>

        {/* Posts Page Component */}
        <PostsPage initialPosts={posts} />
      </div>
    </div>
  );
}
