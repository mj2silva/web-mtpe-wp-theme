
import { PlainText, InnerBlocks, MediaUpload, MediaUploadCheck, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

const ProcessSave = (props) => {
  const { attributes: { title, icon } } = props;

  return (
    <div className="container">
      <div class="process-bar">
        <div class="row process-bar__header">
          <div class="col-2 p-0 process-bar__icon">
            <img src={icon.url} alt={icon.alt} />
          </div>
          <div class="col p-0 process-bar__title">
            {title}
          </div>
        </div>
        <div class="row g-0 process-bar__content">
          <InnerBlocks.Content />
        </div>
      </div>
    </div>
  );
}

export default ProcessSave;
