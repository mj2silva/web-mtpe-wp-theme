
// import { PlainText } from '@wordpress/block-editor';
import { useBlockProps, PlainText } from '@wordpress/block-editor';

const ExternalBlueLinkEdit = (props) => {
  const { attributes: { url, label }, setAttributes } = props;

  const onChangeUrl = (newUrl) => {
    setAttributes({ label, url: newUrl })
  }

  const onChangeLabel = (newLabel) => {
    setAttributes({ label: newLabel, url })
  }

  return (
    <div {...useBlockProps()}>
      <div className='container with-border'>
        <div className="container m-0 p-0 g-0">
          <div className="row g-0 d-flex align-items-center">
            <div className="col-4 p-1">
              <span>Url: </span>
              <PlainText label="URL" value={url} placeholder="URL" onChange={onChangeUrl} />
            </div>
            <div className="col-7 offset-1 link link--secondary link--list p-1">
              <span>Texto: </span>
              <PlainText label="Texto de enlace" placeholder="Texto de enlace" value={label} onChange={onChangeLabel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExternalBlueLinkEdit;
