const MTPELinkSave = (props) => {
  const { attributes: { links, style } } = props;
  const groupClassName = (() => {
    if (style === 'border-style') return 'link-group link-group--border';
    if (style === 'border') return 'link-group link-group--border'
    if (style === 'style') return 'link-group';
    if (style === 'default') return 'link-group';
    return 'link-group';
  })();
  const linkClassName = (() => {
    if (style === 'border-style') return 'list__element-item';
    if (style === 'border') return 'list__element-item list__element-item--no-style';
    if (style === 'style') return 'list__element-item';
    if (style === 'default') return 'list__element-item list__element-item--no-style';
    return 'list__element-item list__element-item--no-style';
  })();
  return (
    <div className={groupClassName}>
      <ul>
        {
          links.map((link) => (
            <li className={linkClassName}>
              <a target="_blank" rel="noopener noreferrer" className="link text-center" href={link.url?.trim()}>
                <span className="link__text">{link.label?.trim()}{' '}</span>
                <span className="material-icons link__icon">open_in_new</span>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default MTPELinkSave;
