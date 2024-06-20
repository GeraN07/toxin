import './feature.css';
type FeatureProps = {
  feature: Any
};
const Feature = ({ feature }: Any) => {
  console.log(feature, feature.icon)
  return (
    <div className="feature-block">
      <i className="material-icons feature-block__feature-icon">{feature.icon}</i>
      <div className="feature-block__feature-text">
        <h4 className="feature-block__feature-title">{feature.title}</h4>
        <p className="feature-block__feature-text">{feature.text}</p>
      </div>
    </div>
  );
};

export default Feature;
