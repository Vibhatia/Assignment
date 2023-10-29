import React from 'react'
// import Tag from './Tag'
// import getImageSrc from './getImageSrc'
import './styles/Card.css'

const doneIcon = '/icons/status/Todo.svg'
const ellipsisIcon = '/icons/ellipsis.svg'

function Card({ticket, grouping, user}) {
  return (
    <div className='card'>
        <div className='card-header'>
            <div className='card-id'>id</div>
            {grouping === 'user' ? null : 
            <div className='card-user'>
                <div className='card-user-icon'>userName</div>
                <div className={user.available ? 'active-user' : 'inactive-user'}></div>
            </div>} 
        </div>
        <div className='card-body'>
            {grouping === 'status' ? null : <img src={'/icons/status/' + ticket.status + '.svg'} />}
            <span>title</span>
        </div>
        <div className='card-footer'>
            {grouping === 'priority' ? null : <div className='card-footer-priority'><img src={'/icons/priority/' + ticket.priority + '.svg'} /></div>}
            <div className='card-footer-tags'>
         card footer
            </div>
        </div>
    </div>
  )
}

export default Card