// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L, { LatLngExpression } from 'leaflet';
// import 'leaflet/dist/leaflet.css';

// // Use an emoji as a marker
// const emojiIcon = L.divIcon({
//   html: '📍',
//   className: '', // no extra CSS class
//   iconSize: [24, 24],
//   iconAnchor: [12, 24],
//   popupAnchor: [0, -24],
// });

// // List of travel locations
// const travelLocations = [
//   // Hungary
//   { city: 'Budapest', country: 'Hungary', lat: 47.4979, lng: 19.0402 },
//   // Italy
//   { city: 'Trieste', country: 'Italy', lat: 45.6495, lng: 13.7768 },
//   { city: 'Florence', country: 'Italy', lat: 43.7696, lng: 11.2558 },
//   { city: 'Pisa', country: 'Italy', lat: 43.7228, lng: 10.4017 },
//   { city: 'Venice', country: 'Italy', lat: 45.4408, lng: 12.3155 },
//   // Slovenia
//   { city: 'Ljubljana', country: 'Slovenia', lat: 46.0569, lng: 14.5058 },
//   // Greece
//   { city: 'Athens', country: 'Greece', lat: 37.9838, lng: 23.7275 },
//   { city: 'Aegina', country: 'Greece', lat: 37.7389, lng: 23.4265 },
//   { city: 'Paros', country: 'Greece', lat: 37.0853, lng: 25.1477 },
//   { city: 'Naxos', country: 'Greece', lat: 37.1050, lng: 25.3765 },
//   { city: 'Nafplio', country: 'Greece', lat: 37.5686, lng: 22.7960 },
//   { city: 'Antiparos', country: 'Greece', lat: 36.8327, lng: 25.1446 },
//   { city: 'Despotiko', country: 'Greece', lat: 36.9167, lng: 25.1167 },
//   // Croatia
//   { city: 'Zagreb', country: 'Croatia', lat: 45.8150, lng: 15.9785 },
//   { city: 'Zadar', country: 'Croatia', lat: 44.1194, lng: 15.2314 },
//   { city: 'Split', country: 'Croatia', lat: 43.5081, lng: 16.4402 },
//   // Malta
//   { city: 'St. Julians', country: 'Malta', lat: 35.9126, lng: 14.4828 },
//   { city: 'St. Pauls Bay', country: 'Malta', lat: 35.9370, lng: 14.3997 },
//   { city: 'Mdina', country: 'Malta', lat: 35.8867, lng: 14.4039 },
//   { city: 'Sliema', country: 'Malta', lat: 35.9123, lng: 14.5019 },
//   // Germany
//   { city: 'Munich', country: 'Germany', lat: 48.1351, lng: 11.5820 },
//   { city: 'Berlin', country: 'Germany', lat: 52.5200, lng: 13.4050 },
//   // Czech Republic
//   { city: 'Prague', country: 'Czech Republic', lat: 50.0755, lng: 14.4378 },
//   // Austria
//   { city: 'Vienna', country: 'Austria', lat: 48.2082, lng: 16.3738 },
// ];

// export default function StudyAbroadMap() {
//   return (
//     <div className="w-full h-[600px]">
//       <MapContainer
//         // FIX 1: Cast the array to LatLngExpression
//         center={[45, 15] as LatLngExpression} 
//         zoom={4}
//         style={{ height: '100%', width: '100%' }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           // Best practice: Add attribution to avoid potential warnings
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         {travelLocations.map((loc, idx) => (
//           <Marker 
//             key={idx} 
//             // FIX 2: Cast these coordinates as well
//             position={[loc.lat, loc.lng] as LatLngExpression} 
//             icon={emojiIcon}
//           >
//             <Popup>
//               {loc.city}, {loc.country}
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }