import { expPoints } from '@/utils/static-data';
import React from 'react'
import { SecondaryHeader } from '../ui/typography';

function ExpPoints() {
  return (
    <div>
      {
        expPoints.map((p, i) => {
          return <div key={i}>
            <SecondaryHeader>{p['project name']}</SecondaryHeader>
            <ul>
              {
                p.description.map((d, i) => <li className='list-item list-disc'  key={i}>{d}</li>)
              }
            </ul>
          </div>
        })
      }
    </div>
  )
}

export default ExpPoints;
