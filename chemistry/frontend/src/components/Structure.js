import React, { useEffect} from 'react'
import SmilesDrawer from 'smiles-drawer'
import Preloader from './Preloader';

const Structure = ({ compound, shown, setShown }) => {

  const options = {
    isometric: true,
    explicitHydrogens: true,
    terminalCarbons: true,
    atomVisualization: 'default',
    width: 750,
    height:350
  }
  const drawer = new SmilesDrawer.Drawer(options)

  useEffect(() => {
    SmilesDrawer.parse(compound, tree => {
      setShown('structure')
      setTimeout(() => {

        drawer.draw(tree, 'structure__canvas', 'light', false)
      }, 500)
    })
  }, [compound])

  return (
    <div className="structure__wrapper" style={{ width: options.width, height: options.height }}>
      { shown === 'none' && null }
      { shown === 'loader' && (
        <div className="preloader__wrapper">
          <Preloader />  
        </div>
      ) }
      { shown === 'structure' && (
        <canvas id="structure__canvas" className="structure__canvas"></canvas>
      ) }
    </div>
  )
}

export default Structure

/*
{


      shown === 'none' && null

      shown === 'loader' && (

      
      )

      shown === 'structure' && (

      )



    }
*/