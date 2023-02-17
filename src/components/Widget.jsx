import React from 'react'
import Info from '@material-ui/icons/Info'
import '../styles/widget.css'
const Widget = () => {
  return (
    <>
    <div className='widget'>
        <div className='widget__top'>
            <div className='widget__header'>
                <h4>LinkedIn News</h4>
                <Info/>
            </div>
            <div className='widget__body'>
                <ul className='widget__options'>
                    <li>
                        <h4>Slaynin Jobs search Fees</h4>
                        <p>6d ago *4,55 readers</p>
                    </li>
                    <li>
                        <h4>A two pizza rule for eating</h4>
                        <p>2d ago * 356 readers</p>
                    </li>
                    <li>
                        <h4>A two pizza rule for eating</h4>
                        <p>2d ago * 356 readers</p>
                    </li>
                    <li>
                        <h4>A two pizza rule for eating</h4>
                        <p>2d ago * 356 readers</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className='widget__bottom'>
            <div className='widget__header'>
                <h4>Todays's top Courses</h4>
                <Info/>
            </div>
            <div className='widget__body'>
                <ul className='widget__options'>
                    <li>
                        <h4>loading with some random text</h4>
                        <p>ids fjlkajfjadfjla</p>
                    </li>
                    <li>
                        <h4>loading with some random text</h4>
                        <p>ids fjlkajfjadfjla</p>
                    </li>
                    <li>
                        <h4>loading with some random text</h4>
                        <p>ids fjlkajfjadfjla</p>
                    </li>
                </ul>
            
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Widget