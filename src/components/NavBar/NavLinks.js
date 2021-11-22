function NavLinks(props) {
  return (
    <ul>
      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/portfolio/#home">Home</a>
      </li>

      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/portfolio/#about">About Me</a>
      </li>

      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/portfolio/#works">Works</a>
      </li>

      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/portfolio/#contact">Contact</a>
      </li>

      <li onClick={() => props.isMobile && props.closeMobileMenu()}>
        <a href="/portfolio/#comments">Comments</a>
      </li>
    </ul>
  );
}
/*https://youtu.be/Et5tDPoU03c?t=1662*/
export default NavLinks;
