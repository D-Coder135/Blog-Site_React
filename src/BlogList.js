const BlogList = ({ blogs, title}) => {

    // const blogs = props.blogs;

    return ( 
        <h1></h1>
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p> Written by { blog.author }</p>
                </div>

            ))}
        </div>
     );
}
 
export default BlogList;