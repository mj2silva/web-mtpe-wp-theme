
import { InnerBlocks } from '@wordpress/block-editor';

const ContainerGraySave = () => {
  return (
    <div className="bg-gray py-4 container-fluid p-0">
      <div className="container">
        <InnerBlocks.Content />
      </div>
    </div>
  );
}

export default ContainerGraySave;
