import React from 'react'
import Person from './Person'


export default function People({data}) {
  return (
    <div>
      {data.map((people, i) => {

return (
    <Person key={people.i} {...people} />
      )
      })}
    </div>
  )
}
