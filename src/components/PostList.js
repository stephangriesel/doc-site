import React from 'react'
import PostCard from './PostCard';
import styles from '../css/postlist.module.css';
import { FaAndroid } from 'react-icons/fa';

const PostList = ({ posts }) => {
    console.log("<< PostList: POSTS >>")
    console.log(posts);
    return (
        <section className={styles.posts}>
            <div className={styles.header}>
                <h1><FaAndroid /></h1>
                <h1>doc.stephangriesel.com</h1>
            </div>
            <div className={styles.center}>
                {posts.map(({ node }, index) => {
                    return <PostCard key={index} post={node} />
                })}
            </div>

        </section>
    )
}

export default PostList;
