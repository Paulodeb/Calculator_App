import { Buttons } from './Button';
import '../style.css';

const handleChange = (e) => {
  e.preventDefault();
}

export const Calculator = () => {
  return (
    <div className="container">
      <form onSubmit={handleChange}>
        <Buttons />
      </form>
    </div>
  );
};
