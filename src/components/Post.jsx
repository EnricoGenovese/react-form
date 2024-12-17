export default function Post({ title, content }) {
    return (
        <div className="container my-3">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}