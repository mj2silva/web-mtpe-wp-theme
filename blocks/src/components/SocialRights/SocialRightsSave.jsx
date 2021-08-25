import { useBlockProps } from '@wordpress/block-editor'

const SocialRightsSave = ({ socialRights }) => {
  const blockProps = useBlockProps();
  return (
    <div {...blockProps}>
      <section id="derechos-socio-laborales" className="container py-5 p-4">
        <div className="py-4">
          <h2>Conoce los Derechos Socio Laborales de los Trabajadores Migrantes</h2>
          <p className="h5">
            Los trabajadores migrantes del Régimen Laboral de la Actividad Privada tienen entre sus principales derechos socio laborales los siguientes:
          </p>
          <div className="container container--gray">
            <ul className="row px-0 py-4">
              {!socialRights && 'Cargando...'}
              {socialRights && socialRights.length === 0 && 'No se han registrado derechos socio laborales'}
              {socialRights && socialRights.length > 0 && (
                socialRights.map((socialRight) => (
                  <div className="col-4 d-flex">
                    <li className="list__element-item">
                      <a className="link text-center" href={socialRight.link}>
                        <span className="link__text">{socialRight.title?.rendered}</span>
                        {' '}
                        <span className="material-icons link__icon">open_in_new</span>
                      </a>
                    </li>
                  </div>
                ))
              )}
            </ul>
          </div>
          <div className="row">
            <div className="col d-flex flex-row-reverse">
              <span className="button button--secondary" style={{ justifyContent: 'space-between' }}>
                Ver más derechos
                <svg className="ml-4 button__icon" xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26">
                  <path fill="currentColor" d="M12.5.5l-2.203 2.203 8.719 8.735H0v3.125h19.016l-8.72 8.734L12.5 25.5 25 13z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SocialRightsSave;
