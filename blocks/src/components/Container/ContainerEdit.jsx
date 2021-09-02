
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

const ContainerEdit = () => {
  return (
    <div {...useBlockProps()}>
      <div className="container with-border wp-block">
        <InnerBlocks />
      </div>
    </div>
  );
}

export default ContainerEdit;
