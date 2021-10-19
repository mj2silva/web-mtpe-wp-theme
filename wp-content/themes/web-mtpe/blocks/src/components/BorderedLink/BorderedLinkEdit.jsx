
// import { PlainText } from '@wordpress/block-editor';
import { useBlockProps, PlainText } from '@wordpress/block-editor';

const BorderedLinkEdit = (props) => {
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
        <div className="row g-0">
          <div className="p-0">
            <span>Url: </span>
            <PlainText label="URL" value={url} placeholder="URL" onChange={onChangeUrl} />
          </div>
        </div>
        <div className="row g-0">
          <span>Texto: </span>
          <PlainText label="Texto de enlace" placeholder="Texto de enlace" value={label} onChange={onChangeLabel} />
        </div>
      </div>
    </div>
  );
}

export default BorderedLinkEdit;
