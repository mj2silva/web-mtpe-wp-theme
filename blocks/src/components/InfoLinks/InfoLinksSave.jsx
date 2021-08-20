const InfoLinksSave = (props) => {
  const { attributes: { links } } = props;
  return (
    <div className='container'>
      <div className="row">
        <h2>¡Todo lo que debes saber para trabajar dentro y fuera del Perú!</h2>
        <p>Entérate de los beneficios, requisitos y pasos para acceder a ellos, y otra información de tu interés</p>
      </div>
      <div className="row justify-content-center">
        {
          links.map((link) => (
            <div className="col-12 col-md-auto">
              <div className="card align-items-center border-0 presentation__card">
                <img className="d-block card-img-top presentation__link-image" alt={link.image?.alt} src={link.image?.url} />
                <div className="card-body text-center">
                  <a className="d-block btn btn-primary button--primary informative-links__button" href={link.url}>{link.label}</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default InfoLinksSave;
