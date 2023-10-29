import React, {useEffect, useState} from 'react'
import './styles/Kanban.css'
import DATA from './getItems'
import Navbar from './Navbar';

function Kanban() {
    const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
    const [ordering, setOrdering] = useState(localStorage.getItem('ordering') || 'title');
  return (
    <div className='page'>
        <Navbar grouping={grouping} ordering={ordering} setGrouping={setGrouping} setOrdering={setOrdering} />
    </div>
  )
}

export default Kanban