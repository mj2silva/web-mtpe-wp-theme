const InfoCardsSave = (props) => {
  const { attributes: { links } } = props;
  return (
    <div className="row g-0 row-cols-4 info-cards">
      {
        links.map((link) => (
          <div className="card col-12 col-md-auto m-1 info-card p-1">
            <div className="row g-0">
              <div className="col p-0 m-0 info-card__flag">
                <a target="_blank" rel="noopener noreferrer" href={link.url.trim()}>
                  <img className="img-fluid" src={link.image?.url.trim()} alt={link.image?.alt.trim()} />
                </a>
              </div>
              <div className="col p-1 m-0 d-flex align-items-center">
                <div className="card-body p-0 info-card__body">
                  <a target="_blank" rel="noopener noreferrer" className="info-card__link" href={link.url.trim()}>
                    {link.label?.toUpperCase().trim()}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default InfoCardsSave;
