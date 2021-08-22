
import InfoLinkInput from './InfoLinkInput.jsx'

const InfoLinksEdit = (props) => {
  const { attributes: { links }, setAttributes } = props;
  const addLink = () => {
    setAttributes({
      links: [
        ...links,
        {
          id: new Date().getTime().toString(),
          image: null,
          url: '',
          label: '',
        },
      ]
    })
  }
  const removeLink = (linkToRemove) => {
    const newLinks = links.filter((link) => {
      return (link.id !== linkToRemove.id);
    })
    setAttributes({ links: newLinks });
  }
  const editLink = (newLink) => {
    const newLinks = links.map((link) => {
      return (link.id === newLink.id) ? newLink : link;
    })
    setAttributes({ links: newLinks });
  }
  return (
    <div className='container'>
      <div className="row">
        <h2>¡Todo lo que debes saber para trabajar dentro y fuera del Perú!</h2>
        <p>Entérate de los beneficios, requisitos y pasos para acceder a ellos, y otra información de tu interés</p>
      </div>
      <div className="row">
        {
          links.map((link) => (
            <div className="col-3">
              <InfoLinkInput link={link} setLink={editLink} removeLink={removeLink} />
            </div>
          ))
        }
      </div>
      <button className="button add-new-button" onClick={addLink}>Añadir nuevo link</button>
    </div>
  );
}

export default InfoLinksEdit;
