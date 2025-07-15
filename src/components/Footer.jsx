export const Footer = () => {
  return (
    <div className="h-20 w-full flex items-center justify-center bg-footer">
      <p className="t4 italic text-primary-foreground">
        &copy; {new Date().getFullYear()} huizedevries.nl. All rights reserved.
      </p>
    </div>
  );
};
