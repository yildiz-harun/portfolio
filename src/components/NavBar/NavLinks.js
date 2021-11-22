function NavLinks(props) {
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/#home">Home</a>
      </li>

      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/#about">About Me</a>
      </li>

      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/#works">Works</a>
      </li>

      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/#contact">Contact</a>
      </li>

      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/#comments">Comments</a>
      </li>
    </ul>
  );
}
/*https://youtu.be/Et5tDPoU03c?t=1662*/
export default NavLinks;
