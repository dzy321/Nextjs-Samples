import PostLink from '../components/post-link'

export default () => (
  <div>
    <h1>Post List</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
  </div>
)