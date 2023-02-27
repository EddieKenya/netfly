const Post = ({posts}) => {
    return ( 
        <>
            {posts.map((post) =>(
                <div className="docs" key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <h6>Published on {post.published}</h6>
                </div>
                        
            ))}
        </>
     );
}
 
export default Post;