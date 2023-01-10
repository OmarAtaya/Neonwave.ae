import React, { useEffect } from 'react'
import { PageItem, Pagination } from 'react-bootstrap'

function Paginat({nPages, currentPage, setCurrentPage}) {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)
    const nextPage = () => {
        if(currentPage !== nPages) 
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }
    useEffect(() => {
      window.scroll(0,0)
    }, [currentPage])
    
    return (
        <Pagination className='d-flex justify-content-center'>
            <Pagination.Prev onClick={prevPage}/>
            {pageNumbers.map((number, index)=> {
                return (index + 1) === currentPage
                ?  <PageItem active key={index}>{number}</PageItem>
                :  <PageItem onClick={() => setCurrentPage(index+1)} key={index}>{number}</PageItem>
                
            })}
            <Pagination.Next onClick={nextPage}/>
        </Pagination>
    )
}

export default Paginat