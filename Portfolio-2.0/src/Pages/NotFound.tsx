import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-semibold text-primary mb-2">404</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-3">Route not found.</h1>
      <p className="text-muted-foreground mb-8 max-w-sm">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className="btn rounded-sm">
        Return Home →
      </Link>
    </div>
  );
};
