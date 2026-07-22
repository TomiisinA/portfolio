export const Footer = () => {
  return (
    <footer className="px-4 pb-8">
      <div className="container max-w-8xl mx-auto border-t border-border pt-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Oluwatomisin Ajayi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
