export const Link = ({ links }) => {
  console.log(links);
  return links.map((link) => (
    <a className={link.class} href={link.link}>
      <li>{link.name}</li>
    </a>
  ));
};
