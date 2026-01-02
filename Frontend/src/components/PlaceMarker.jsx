import React from 'react'
import { VisitColumns } from '../data/data'
import Cards from './Cards'

function PlaceMarker() {
    


  return (
  <div className="flex flex-row gap-6 p-6 bg-gray-100 rounded-lg">
  {VisitColumns.map((item, index) => (
    <div
      key={item.id}
      className="flex-1 bg-white p-4 rounded-md shadow hover:shadow-lg transition-shadow"
    >
      <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
      {/* <Cards/> */}
    </div>
  ))}
</div>
  )
}

export default PlaceMarker