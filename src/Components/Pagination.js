import React from 'react'

const PaginationComponent = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumbers = [];

    for(let i=1;i<=Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

  return (
    <div className='Pagination'>
        <ul>
            {
                pageNumbers.map(number => (
                    <li key={number}>
                        <h3 onClick={()=>paginate(number)} className='page-link'>
                            {number}
                        </h3>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default PaginationComponent