const BorderedLinkSave = (props) => {
  const { attributes: { url, label } } = props;
  return (
    <li>
      {url
        ? (
          <a target="_blank" rel="noopener noreferrer" className="link link--bordered" href={url?.trim()}>
            <span className="link__text">{label.trim()}{' '}</span>
            <span className="material-icons link__icon">arrow_forward_ios</span>
          </a>)
        : (
          <h5 className="link link--bordered" style={{ textDecoration: 'none' }}>
            <span className="link__text">{label.trim()}{' '}</span>
          </h5>
        )
      }
    </li>
  )
}

export default BorderedLinkSave;
