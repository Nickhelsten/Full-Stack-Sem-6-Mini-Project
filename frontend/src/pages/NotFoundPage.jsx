import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="page-section">
      <div className="card empty-state">
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link className="button" to="/">
          Go to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFoundPage;
