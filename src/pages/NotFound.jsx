export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-foreground/60 mb-8">Page not found</p>
      <a href="/" className="cosmic-button">
        Go Home
      </a>
    </div>
  );
};
