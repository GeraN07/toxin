import './feature.css';
type FeatureProps = {
  icon: string;
  title: string;
  text: string;
};
const Feature = ({ icon, title, text }: FeatureProps) => (
  <div className="feature-block">
    <i className="material-icons feature-block__feature-icon">
      {icon}
    </i>
    <div className="feature-block__feature-text">
      <h4 className="feature-block__feature-title">{title}</h4>
      <p className="feature-block__feature-text">{text}</p>
    </div>
  </div>
);

export default Feature;
