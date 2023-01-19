import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const LoaderExampleSizesInverted = () => (
  <div>
    <Segment>
      <Dimmer active inverted>
        <Loader size="mini"></Loader>
        <Image src="/images/wireframe/short-paragraph.png" />
      </Dimmer>
    </Segment>
  </div>
);

export default LoaderExampleSizesInverted;
