import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../../assets/wrappers/PaginationContainer';
import { useDispatch } from 'react-redux';

const PaginationContainer = ({pageIndex, pageSize, count,changePage }) => {
  const dispatch = useDispatch();
  let maxPage = 0;
  if( count % pageSize === 0){
    maxPage = count.length / pageSize;
  }else{
    maxPage = (Math.floor(count / pageSize) + 1)
  }
  const pages = Array.from({ length: maxPage }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = pageIndex + 1;
    if ( pageSize * pageIndex > count){
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = pageIndex - 1;
    if (newPage < 1) {
      newPage = maxPage;
    }
    dispatch(changePage(newPage));
  };

  return (
    <Wrapper>
      <button type='button' className='prev-btn' onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className='btn-container'>
        {pages.map((pageNumber) => {
          return (
            <button
              type='button'
              key={pageNumber}
              className={pageNumber === pageIndex ? 'pageBtn active' : 'pageBtn'}
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button type='button' className='next-btn' onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};
export default PaginationContainer;