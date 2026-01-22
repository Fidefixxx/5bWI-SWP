import { useState, useEffect } from 'react'
import type { TrafficData } from './types'
import { TrafficLight } from './TrafficLight'
import './App.css'

const API_URL = 'http://localhost:3001/trafficData'

function App() {
  const [trafficData, setTrafficData] = useState<TrafficData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchTrafficData()
    
    // Auto-refresh alle 30 Sekunden
    const interval = setInterval(fetchTrafficData, 30000)
    return () => clearInterval(interval)
  }, [])

  async function fetchTrafficData() {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(API_URL)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data: TrafficData[] = await response.json()
      setTrafficData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Fehler beim Laden der Daten')
      console.error('Error fetching traffic data:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading && trafficData.length === 0) {
    return (
      <div className="app">
        <h1>Verkehrsampeln</h1>
        <p>Lade Daten...</p>
      </div>
    )
  }

  if (error && trafficData.length === 0) {
    return (
      <div className="app">
        <h1>Verkehrsampeln</h1>
        <div className="error">
          <p>❌ {error}</p>
          <button onClick={fetchTrafficData}>Erneut versuchen</button>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <h1>Verkehrsampeln</h1>
      {error && (
        <div className="error-banner">
          ⚠️ {error} <button onClick={fetchTrafficData}>Aktualisieren</button>
        </div>
      )}
      <div className="traffic-lights-grid">
        {trafficData.map((data) => (
          <TrafficLight key={data.location} data={data} />
        ))}
      </div>
      <button className="refresh-button" onClick={fetchTrafficData} disabled={loading}>
        {loading ? 'Lädt...' : '🔄 Aktualisieren'}
      </button>
    </div>
  )
}

export default App
