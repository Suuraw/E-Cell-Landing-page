const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 text-center">
      <p className="text-neutral-300">
        &copy; {new Date().getFullYear()}  All rights reserved.
      </p>
      <p className="text-neutral-300">Built by Sujay</p>
    </footer>
  );
};

export default Footer;