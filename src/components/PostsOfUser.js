import { useState, useEffect } from "react"
import FormDialog from "./Dialog"
import './PostsOfUser.css';


function PostsOfUser(props) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        let postsTemp = props.posts.filter(post => post.userId == props.id)
        setPosts(postsTemp)
    }, [props])

    return (
        <>
        <div id="allPosts">
            <FormDialog id={props.id} getPost={props.getPost}/>
            {posts.map((post, i) => (<>
                <h3 key={i}>{i + 1}: {post.title}</h3>
                <p key={i}>{post.body}</p>
                </>
            ))}
           
        </div>
        </>
    )
}

export default PostsOfUser