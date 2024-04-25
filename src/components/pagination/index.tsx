import React, { useState } from "react";
import PaginationButton from "./components/pagination-button";
import {
  TiMediaFastForward,
  TiMediaPlay,
  TiMediaPlayReverse,
  TiMediaRewind,
} from "react-icons/ti";

interface PaginationProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  pageCount: number;
  initialPage?: number;
  onPageChange?: (value: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  initialPage = 0,
  onPageChange,
  ...rest
}) => {
  const [seletedPage, setSeletedPage] = useState<number>(initialPage);

  const handlePageClick = (page: number) => {
    setSeletedPage(page);
    onPageChange && onPageChange(page);
  };

  const handlePagePriorClick = () =>
    seletedPage > 0 && handlePageClick(seletedPage - 1);

  const handlePageNextClick = () =>
    seletedPage < pageCount - 1 && handlePageClick(seletedPage + 1);

  return (
    <div
      {...rest}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      data-testid="table-pagination"
    >
      <PaginationButton
        onClick={() => handlePageClick(0)}
        data-testid="pagination-item-first"
      >
        <TiMediaRewind />
      </PaginationButton>
      <PaginationButton
        onClick={handlePagePriorClick}
        data-testid="pagination-item-prior"
      >
        <TiMediaPlayReverse />
      </PaginationButton>
      {[...Array(pageCount)].map((_, index) => {
        const itemNumber = index + 1;

        return (
          <PaginationButton
            key={index}
            active={initialPage === index}
            onClick={() => handlePageClick(index)}
            data-testid={`pagination-item-${index}`}
          >
            {itemNumber}
          </PaginationButton>
        );
      })}

      <PaginationButton
        onClick={handlePageNextClick}
        data-testid="pagination-item-next"
      >
        <TiMediaPlay />
      </PaginationButton>
      <PaginationButton
        onClick={() => handlePageClick(pageCount - 1)}
        data-testid="pagination-item-last"
      >
        <TiMediaFastForward />
      </PaginationButton>
    </div>
  );
};

export default Pagination;
