
import { InnerBlocks } from '@wordpress/block-editor';

const ContainerSave = () => {
  return (
    <div className="container py-4">
      <InnerBlocks.Content />
    </div>
  );
}

export default ContainerSave;
