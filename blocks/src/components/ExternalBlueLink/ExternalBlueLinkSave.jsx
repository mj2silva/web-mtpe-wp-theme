const ExternalBlueLinkSave = (props) => {
  const { attributes: { url, label } } = props;
  return (
    <li>
      {url
        ? (
          <a target="_blank" rel="noopener noreferrer" className="link link--secondary link--list" href={url?.trim()}>
            <span className="link__text">{label?.trim()}{' '}</span>
            <span className="material-icons link__icon">open_in_new</span>
          </a>)
        : (
          <h5 className="link link--secondary link--list" style={{ textDecoration: 'none' }}>
            <span className="link__text">{label?.trim()}{' '}</span>
          </h5>
        )
      }
    </li>
  )
}

export default ExternalBlueLinkSave;
