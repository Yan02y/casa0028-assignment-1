import { Bikedata } from './data/Bikedata'
import { useState, useMemo } from 'react'
import TitleBar from './components/TitleBar'
import MapDisplay from './components/MapDisplay'
import Sidebar from './components/Sidebar'
import './styles.css'

function App() {

  const [searchTerm, setSearchTerm] = useState("")
  const [minCapacity, setminCapacity] = useState(0)

  const cities = useMemo(() => {
    const all = Bikedata.features.map(f =>f.properties.address_city);
    return [...new Set(all)].filter(Boolean)
  }, [])

  const filteredData = useMemo(() => {
    return Bikedata.features.filter(f =>{
      const mathCity = (f.properties.address_city || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchCapacity = (parseInt(f.properties.capacity) || 0) >= minCapacity;
      return mathCity && matchCapacity;
    });  
  }, [searchTerm, minCapacity]);

  return (
    <div className="flex flex-col h-screen">
      
      <TitleBar title="🚲 Swiss Bike Parking Explorer" />

      <div className="flex flex-1">
        <Sidebar
        cities={cities}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        minCapacity={minCapacity}
        setminCapacity={setminCapacity}
        total={Bikedata.features.length}
        filteredCount={filteredData.length}
        />

        <div className="flex-1">
          <MapDisplay data={filteredData} />
        </div>

      </div>
    </div>
  )
}

export default App