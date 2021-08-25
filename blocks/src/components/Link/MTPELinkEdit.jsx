
// import { PlainText } from '@wordpress/block-editor';
import { SelectControl, TextControl } from '@wordpress/components';

const MTPELinkEdit = (props) => {
  const { attributes: { links, style }, setAttributes } = props;
  const addLink = () => {
    setAttributes({
      links: [
        ...links,
        {
          id: new Date().getTime().toString(),
          url: '',
          label: '',
        },
      ],
      style: 'default'
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
  const onChangeStyle = (newStyle) => {
    setAttributes({
      links,
      style: newStyle,
    })
  }

  return (
    <div className='container with-border'>
      <div className="row">
        {
          links.map((link) => {
            const onChangeUrl = (url) => {
              editLink({
                ...link,
                url,
              })
            }
            const onChangeLabel = (label) => {
              editLink({
                ...link,
                label,
              })
            }
            return (
              <div>
                <div className="container m-0 p-0 g-0">
                  <div className="row d-flex align-items-center">
                    <div className="col-4">
                      <TextControl label="URL" value={link.url} placeholder="URL" onChange={onChangeUrl} />
                    </div>
                    <div className={"col-4"}>
                      <TextControl label="Texto de enlace" placeholder="Texto" value={link.label} onChange={onChangeLabel} />
                    </div>
                    <button
                      className="col-3 col-sm-2 d-flex align-items-center justify-content-center offset-sm-1 button button--remove"
                      type="button"
                      onClick={() => removeLink(link)}>
                      <span className='material-icons'>delete</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="row d-flex align-items-center">
        <div className="col-4">
          <SelectControl
            label="Tipo de grupo"
            value={style || 'default'}
            options={[
              { label: 'Con viñeta y bordes', value: 'border-style' },
              { label: 'Con bordes', value: 'border' },
              { label: 'Simple', value: 'default' },
            ]}
            onChange={onChangeStyle}
          />
        </div>
        <button className="col-3 col-sm-2 offset-4 offset-sm-5 d-flex align-items-center justify-content-center button button--small" onClick={addLink}>
          <span className="material-icons">add</span>
        </button>
      </div>
    </div>
  );
}

export default MTPELinkEdit;
