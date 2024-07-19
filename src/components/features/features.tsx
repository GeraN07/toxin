import { FeatureType } from '../../types/types';
import Feature from '../feature/feature';

type FeaturesProps = {
  features: FeatureType[];
};

const Features = ({ features }: FeaturesProps) => (
  <div className="room-details__features-block revealator-once">
    <h1 className="room-details__features-title">Сведения о номере</h1>
    {features.map((feature: FeatureType) => (
      <Feature feature={feature} key={feature.title} />
    ))}
  </div>
);

export default Features;
