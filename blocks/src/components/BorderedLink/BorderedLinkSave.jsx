const BorderedLinkSave = (props) => {
  const { attributes: { url, label } } = props;
  return (
    <li>
      {url
        ? (
          <a target="_blank" rel="noopener noreferrer" class="link link--bordered" href={url}>
            <span class="link__text">{label}{' '}</span>
            <span class="material-icons link__icon">arrow_forward_ios</span>
          </a>)
        : (
          <h5 class="link link--bordered" style={{ textDecoration: 'none' }}>
            <span class="link__text">{label}{' '}</span>
          </h5>
        )
      }
    </li>
  )
}

export default BorderedLinkSave;
