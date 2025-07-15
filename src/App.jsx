// App.jsx
import React, { useEffect, useState, useRef } from 'react';
import './App.css';

const bins = [
  { id: 1, name: 'Bin A', location: 'MG Road', fill: 40 },
  { id: 2, name: 'Bin B', location: 'Brigade Road', fill: 90 },
  { id: 3, name: 'Bin C', location: 'Indiranagar', fill: 60 },
  { id: 4, name: 'Bin D', location: 'Koramangala', fill: 75 },
  { id: 5, name: 'Bin E', location: 'Whitefield', fill: 30 },
  { id: 6, name: 'Bin F', location: 'Jayanagar', fill: 85 },
  { id: 7, name: 'Bin G', location: 'Malleshwaram', fill: 55 },
  { id: 8, name: 'Bin H', location: 'Rajajinagar', fill: 20 },
  { id: 9, name: 'Bin I', location: 'BTM Layout', fill: 95 },
  { id: 10, name: 'Bin J', location: 'Hebbal', fill: 50 },
  { id: 11, name: 'Bin K', location: 'Banashankari', fill: 65 },
  { id: 12, name: 'Bin L', location: 'Yelahanka', fill: 35 },
  { id: 13, name: 'Bin M', location: 'Electronic City', fill: 80 },
  { id: 14, name: 'Bin N', location: 'HSR Layout', fill: 45 },
  { id: 15, name: 'Bin O', location: 'Kengeri', fill: 70 },
];


const App = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [connectionType, setConnectionType] = useState('unknown');
  const [searchQuery, setSearchQuery] = useState('');
  const observerRef = useRef(null);

  useEffect(() => {
    // Geolocation API
    navigator.geolocation.getCurrentPosition(
      position => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      error => console.warn('Location access denied.', error)
    );

    // Network Information API
    if (navigator.connection) {
      setConnectionType(navigator.connection.effectiveType || 'unknown');
    }
  }, []);

  useEffect(() => {
    // Intersection Observer API
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.backgroundColor = '#e0ffe0';
        }
      });
    });

    document.querySelectorAll('.bin-box').forEach(bin => {
      observerRef.current.observe(bin);
    });

    return () => observerRef.current.disconnect();
  }, []);

  const renderBins = () =>
    bins
      .filter(bin =>
        bin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        bin.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map(bin => (
        <div key={bin.id} className="bin-box">
          <h3>{bin.name}</h3>
          <p>Fill Level: {bin.fill}%</p>
          <p>📍 Location: {bin.location}</p>
          <p style={{ color: bin.fill > 80 ? 'red' : 'green' }}>
            {bin.fill > 80 ? '⚠️ Full - Avoid' : '✅ Acceptable'}
          </p>
        </div>
      ));

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🗑️ Smart Trash Tracker</h1>
        <p><strong>Your Connection:</strong> {connectionType}</p>
        {userLocation ? (
          <p><strong>Your Location:</strong> {userLocation.lat}, {userLocation.lng}</p>
        ) : (
          <p>📡 Getting your location...</p>
        )}
        <input
          type="text"
          placeholder="Search bins by name or location"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{ marginTop: '10px', padding: '5px', width: '100%' }}
        />
      </header>
      <main className="app-main">
        <hr />
        <div className="bin-container">{renderBins()}</div>
      </main>
    </div>
  );
};

export default App;