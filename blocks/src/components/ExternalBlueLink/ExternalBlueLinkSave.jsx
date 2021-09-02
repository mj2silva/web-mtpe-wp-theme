const ExternalBlueLinkSave = (props) => {
  const { attributes: { url, label } } = props;
  return (
    <li>
      {url
        ? (
          <a target="_blank" rel="noopener noreferrer" class="link link--secondary link--list" href={url}>
            <span class="link__text">{label}{' '}</span>
            <span class="material-icons link__icon">open_in_new</span>
          </a>)
        : (
          <h5 class="link link--secondary link--list" style={{ textDecoration: 'none' }}>
            <span class="link__text">{label}{' '}</span>
          </h5>
        )
      }
    </li>
  )
}

export default ExternalBlueLinkSave;
