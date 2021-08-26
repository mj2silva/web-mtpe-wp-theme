const InfoCardsSave = (props) => {
  const { attributes: { links, title } } = props;
  return (
    <div className="container p-0">
      <h4 className="row g-0 info-cards__title">
        {title}
      </h4>
      <div className="row g-0 row-cols-4 info-cards g-0">
        {
          links.map((link) => (
            <div className="card col-12 col-md-auto m-1 info-card p-1">
              <div className="row g-0">
                <div className="col p-0 m-0 info-card__flag">
                  <img className="img-fluid" src={link.image?.url} alt={link.image?.alt} />
                </div>
                <div className="col p-1 m-0 d-flex align-items-center">
                  <div className="card-body p-0 info-card__body">
                    <a className="info-card__link" href={link.url}>
                      {link.label?.toUpperCase()}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default InfoCardsSave;
