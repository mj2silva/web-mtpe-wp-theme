
import { InnerBlocks } from '@wordpress/block-editor';

const ProcessSave = (props) => {
  const { attributes: { title, icon, anchor } } = props;

  return (
    <div className="container position-relative" id={anchor}>
      <div className="process-bar">
        <div className="row process-bar__header">
          <div className="col-2 p-0 process-bar__icon">
            <img src={icon.url} alt={icon.alt} />
          </div>
          <div className="col p-0 process-bar__title">
            {title.trim()}
          </div>
        </div>
        <div className="row g-0 process-bar__content">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}

export default ProcessSave;
