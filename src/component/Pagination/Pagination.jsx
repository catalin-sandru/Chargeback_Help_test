import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { PaginationWrapper } from "./Pagination.style";
import { storeProducts } from "../../asset/data";
import {
  firstPage,
  lastPage,
  nextPage,
  previousPage,
  setPageData,
} from "../../store/pagination-action";

const Pagination = () => {
  const pageCtx = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  const itemsPerPage = 5;
  const { currentPage } = pageCtx;
  const totalPages = Math.ceil(storeProducts.length / itemsPerPage);

  const pageItems = useCallback(
    () => storeProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    [currentPage]
  );

  useEffect(() => {
    dispatch(setPageData(pageItems()));
  }, [currentPage, dispatch, pageItems]);

  const goToFirstPage = () => {
    currentPage === 1 ? alert("You are on the first page!") : dispatch(firstPage());
  };
  const goToPreviousPage = () => {
    currentPage === 1 ? alert("You are on the first page!") : dispatch(previousPage());
  };
  const goToNextPage = () => {
    currentPage === totalPages ? alert("You are on the last page!") : dispatch(nextPage());
  };
  const goToLastPage = () => {
    currentPage === totalPages
      ? alert("You are on the last page!")
      : dispatch(lastPage(totalPages));
  };

  return (
    <PaginationWrapper>
      <button
        className="first page-btn"
        onClick={goToFirstPage}
        disabled={currentPage === 1 ? true : false}
      >
        |&lt;
      </button>
      <button
        className="previous page-btn"
        onClick={goToPreviousPage}
        disabled={currentPage === 1 ? true : false}
      >
        &lt;
      </button>
      <div className="current-page__container">
        <p className="current-page">{currentPage}</p>
      </div>
      <button
        className="next page-btn"
        onClick={goToNextPage}
        disabled={currentPage === totalPages ? true : false}
      >
        &gt;
      </button>
      <button
        className="last page-btn"
        onClick={goToLastPage}
        disabled={currentPage === totalPages ? true : false}
      >
        &gt;|
      </button>
    </PaginationWrapper>
  );
};

export default Pagination;
