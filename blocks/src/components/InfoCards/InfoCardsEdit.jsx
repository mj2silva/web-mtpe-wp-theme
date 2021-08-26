import InfoCardInput from './InfoCardInput.jsx';
import { useBlockProps, PlainText } from '@wordpress/block-editor';

const InfoCardsEdit = (props) => {
  const { attributes: { links, title }, setAttributes } = props;
  const onTitleChange = (newTitle) => {
    setAttributes({
      links,
      title: newTitle,
    })
  }
  const addLink = () => {
    setAttributes({
      title,
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
    setAttributes({ title, links: newLinks });
  }
  const editLink = (newLink) => {
    const newLinks = links.map((link) => {
      return (link.id === newLink.id) ? newLink : link;
    })
    setAttributes({ title, links: newLinks });
  }
  return (
    <div {...useBlockProps()}>
      <div className='container'>
        <div className="row">
          <PlainText value={title} onChange={onTitleChange} placeholder="Título del elemento" />
        </div>
        <div className="row">
          {
            links.map((link) => (
              <div className="col-3">
                <InfoCardInput link={link} setLink={editLink} removeLink={removeLink} />
              </div>
            ))
          }
        </div>
        <button className="button add-new-button" onClick={addLink}>Añadir nueva cartilla informativa</button>
      </div>
    </div>
  );
}

export default InfoCardsEdit;
