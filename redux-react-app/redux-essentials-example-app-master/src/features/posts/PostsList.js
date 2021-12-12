import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './postAuthor'
import { ReactionButtons } from './ReactionButton'
import { TimeAgo } from './TimeAgo'
import { selectAllPosts, fetchPosts } from './postsSlice'
import {Spinner} from '../../components/Spinner'


const PostExcerpt = ({post}) => {
    return(
        <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <div>
            <PostAuthor userId={post.id}/>
            <TimeAgo timeStamp={post.date}/>
        </div>
        <p className="post-content">{post.content.substring(0,100)}</p>
        <ReactionButtons post={post}/>
        <Link to={`/post/${post.id}`} className="button muted-button">
            View Post
        </Link>
        </article>
    )

}

export const PostsList=()=>{
    const dispatch = useDispatch()
    const posts=useSelector(/*state => state.posts*/selectAllPosts)
    const postStatus = useSelector(state => state.posts.status)
    const error = useSelector(state => state.posts.error)

    useEffect(() => {
        if(postStatus ==='idle'){
            dispatch(fetchPosts())
        }
    },[postStatus, dispatch])

    

    // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    // const renderedposts=orderedPosts.map(post=>(
    //     <article className="post-excerpt" key={post.id}>
    //     <h3>{post.title}</h3>
    //     <p className="post-content">{post.content.substring(0,100)}  </p>
    //      <PostAuthor userId={post.user}/>
    //      <TimeAgo timeStamp={post.date}/>
    //      <ReactionButtons post={post}/>
    //     <Link to={`/posts/${post.id}`} className="button muted-button">
    //         View Post
    //     </Link>
    //     </article>

    // ))

    let content
    if (postStatus === 'loading'){
        content = <Spinner text="Loading..."/>

    }else if(postStatus === 'succeeded'){
        const orderedPosts = posts .slice().sort((a,b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => (
            <PostExcerpt key={post.id} post={post} />
          ))
        } else if (postStatus === 'failed') {
          content = <div>{error}</div>
        }


    





    return(
        <section className="posts-List">
        <h2>Posts</h2>
        {/* {renderedposts} */}
        {content}
        </section>
    )
}





