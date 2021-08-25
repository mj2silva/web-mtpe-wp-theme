
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const ContainerGrayEdit = () => {
  return (
    <div {...useBlockProps()}>
      <div className="bg-gray container wp-block">
        <InnerBlocks />
      </div>
    </div>
  );
}

export default ContainerGrayEdit;
