import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { PostAuthor } from './postAuthor'
import { TimeAgo } from './TimeAgo'
import {ReactionButtons} from './ReactionButton'
import { selectPostById } from './postsSlice'

export const SinglePostPage=({match})=>{
    const {postId} = match.params
    const post = useSelector(state =>
        // state.posts.find(post => post.id===postId)
        selectPostById(state, postId)

    )

    if(!post){
        return(
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }
    return(
        <section>
            <article className="post">
            <h2>{post.title}</h2>

            <p className="post-content">{post.content}</p>
            <TimeAgo timeStamp={post.date}/>
            <PostAuthor userId={post.user}/>
            <ReactionButtons post={post}/>
            <Link to={`/editPost/${post.id}`}className="button">
                Edit Post
            </Link>
            </article>
        </section>
    )
}