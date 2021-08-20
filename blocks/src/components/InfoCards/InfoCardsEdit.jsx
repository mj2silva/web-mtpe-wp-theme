
import InfoCardInput from './InfoCardInput.jsx'

const InfoCardsEdit = (props) => {
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
        {
          links.map((link) => (
            <div className="col-3">
              <InfoCardInput link={link} setLink={editLink} removeLink={removeLink} />
            </div>
          ))
        }
      </div>
      <button className="button" onClick={addLink}>Añadir nueva cartilla informativa</button>
    </div>
  );
}

export default InfoCardsEdit;
