const Navbar = () => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container" style={{ justifyContent: 'flex-end' }}>
        <div className="navbar-links">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="navbar-link">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
