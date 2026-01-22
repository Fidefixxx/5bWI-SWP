import type { TrafficData } from './types';
import './TrafficLight.css';

interface TrafficLightProps {
  data: TrafficData;
}

type LightColor = 'red' | 'yellow' | 'green';

function getTrafficColor(data: TrafficData): LightColor {
  const totalCars = data.totalCarlastHour;
  
  if (totalCars > 9000) {
    return 'red'; // Viel Verkehr
  } else if (totalCars > 6000) {
    return 'yellow'; // Mittlerer Verkehr
  } else {
    return 'green'; // Wenig Verkehr
  }
}

export function TrafficLight({ data }: TrafficLightProps) {
  const color = getTrafficColor(data);
  
  return (
    <div className="traffic-light-container">
      <h3 className="location-name">{data.location}</h3>
      <div className="traffic-light">
        <div className={`light red ${color === 'red' ? 'active' : ''}`}></div>
        <div className={`light yellow ${color === 'yellow' ? 'active' : ''}`}></div>
        <div className={`light green ${color === 'green' ? 'active' : ''}`}></div>
      </div>
      <div className="traffic-info">
        <p className="car-count">{data.totalCarlastHour.toLocaleString()} Autos/Stunde</p>
        <p className="timestamp">{new Date(data.timestamp).toLocaleString('de-DE')}</p>
      </div>
    </div>
  );
}
