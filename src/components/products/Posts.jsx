
export default function Posts({ post }) {
 
  return (
    <li>
      <p><strong>Name:</strong>{post.name}</p>
      <p><strong>Email:</strong> {post.email}</p>
      <p><strong>Body:</strong> {post.body}</p>
    </li>
  );
}
