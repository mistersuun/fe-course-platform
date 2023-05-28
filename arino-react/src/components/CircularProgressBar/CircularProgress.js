import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CircularProgress({ value }) {
  return (
    <div style={{ transform: 'scale(0.5)', transformOrigin: 'center' }}>
      <CircularProgressbar value={value} text={`${value}%`} />
    </div>
  );
}
