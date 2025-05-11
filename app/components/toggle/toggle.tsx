import './toggle.css';


const Toggle = () => (
  <div className="toggle">
    <label className="switch">
      <input type="checkbox" name="special" id="special" />
      <span className="slider round" />
    </label>
    <label htmlFor="special" className="toggle-slider">Получать спецпредложения</label>
  </div>
);

export default Toggle;
