import { useState } from "react";
import posts from "../data/posts";



export default function PostForm() {


    const newPost = {
        id: posts.reduce((curr, next) => curr.id < next.id ? next : curr).id + 1,
        title: "",
        content: "",
    }
    const [post, setPost] = useState(newPost);
    const [postsList, setPostsList] = useState([...posts]);

    function handlePost(event) {
        // const newPost = { ...post };
        // newPost[event.target.name] = event.target.value;

        const value = event.target.value;
        setPost({ ...post, [event.target.name]: value })
    }

    function handleSubmit(event) {
        event.preventDefault();

        // const newPostsList = [...postsList];
        // newPostsList.push(post)

        setPostsList([...postsList, newPost]);
        setPost(newPost);

    }

    function deletePost(id) {
        const postsLeft = postsList.filter((post) => post.id !== id);
        setPostsList(postsLeft)
    }

    return (
        <>
            {postsList.map((post, id) =>
                <div className="container my-3" key={id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <div className="btn btn-danger"
                        onClick={() => { deletePost(post.id) }}>Cancella</div>
                </div>
            )}
            <section className="my-5">
                <h2>Inserisci un nuovo post</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="title" className="form-label">
                            Titolo del Post
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            aria-describedby="titleHelp"
                            value={post.title}
                            onChange={handlePost}
                            name="title"
                            required
                        />
                        <div id="titleHelp" className="form-text">
                            Inseisci un titolo per il tuo post
                        </div>
                    </div>
                    <div className="mb-3">

                        <textarea
                            type="text"
                            className="form-control"
                            id="content"
                            value={post.content}
                            onChange={handlePost}
                            name="content"
                            required
                        />
                        <label htmlFor="content" className="form-label" >
                            Contenuto del Post
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Pubblica
                    </button>
                </form>
            </section>
        </>
    )
}

