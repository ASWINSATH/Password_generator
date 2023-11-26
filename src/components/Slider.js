import React from 'react'
import ReactSlider from 'react-slider'

function Slider({ currentPassleng, updatePass}) {
    const updatePassleng = updatedPass =>{
        updatePass(updatedPass)
    }
  return (
    <div>
    <ReactSlider
     min={8}
     max={40}
     value={currentPassleng}
     onChange={value => updatePassleng(value)}
    className='horizontal-slider '
    thumbClassName='example-thumb'
    trackClassName='example-track'
    />
    </div>
  )
}

export default Slider