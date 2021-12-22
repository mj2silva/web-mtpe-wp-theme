const InfoLinksSave = (props) => {
  const { attributes: { links } } = props;
  return (
    <section className="container-fluid container--gray  py-5">
      <div className="container">
        <div className="py-4">
          <h2>¡Todo lo que debes saber para trabajar dentro y fuera del Perú!</h2>
          <p className="h5">
            Entérate de los beneficios, requisitos y pasos para acceder a ellos, y otra información de tu interés.
          </p>
          <div className="py-5">
            <div className="row">
              {
                links.map((link) => (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div className="card--no-bar">
                      <div className="icon-container py-4">
                        <img className="icon card__super-icon" src={link.image?.url?.trim()} alt={link.image?.alt?.trim()} />
                      </div>
                      <a href={link.url?.trim()} className="button--center button--primary">
                        <span className="text-center text--bold">
                          {link.label?.trim()}
                        </span>
                      </a>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoLinksSave;
