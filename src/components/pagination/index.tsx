import React from "react";
import PaginationButton from "./components/pagination-button";
import {
  TiMediaFastForward,
  TiMediaPlay,
  TiMediaPlayReverse,
  TiMediaRewind,
} from "react-icons/ti";
import { useSearchParams } from "react-router-dom";

interface PaginationProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  pageCount: number;
  perPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  perPage,
  ...rest
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageClick = (value: number) => {
    setSearchParams((state) => {
      state.set("page", String(value));
      state.set("size", String(perPage));

      return state;
    });
  };

  const setPageNumber = (page: number) =>
    setSearchParams((state) => {
      state.set("page", String(page));

      return state;
    });

  const getPageNumber = () => Number(searchParams.get("page") ?? 1);

  const handlePagePriorClick = () =>
    getPageNumber() > 1 && setPageNumber(getPageNumber() - 1);

  const handlePageNextClick = () =>
    getPageNumber() < pageCount && setPageNumber(getPageNumber() + 1);

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
      <PaginationButton onClick={() => setPageNumber(1)}>
        <TiMediaRewind />
      </PaginationButton>
      <PaginationButton onClick={handlePagePriorClick}>
        <TiMediaPlayReverse />
      </PaginationButton>
      {[...Array(pageCount)].map((_, index) => {
        const itemNumber = index + 1;

        return (
          <PaginationButton
            key={index}
            active={getPageNumber() === itemNumber}
            onClick={() => handlePageClick(itemNumber)}
            data-testid={`pagination-item-${itemNumber}`}
          >
            {itemNumber}
          </PaginationButton>
        );
      })}

      <PaginationButton onClick={handlePageNextClick}>
        <TiMediaPlay />
      </PaginationButton>
      <PaginationButton onClick={() => setPageNumber(pageCount)}>
        <TiMediaFastForward />
      </PaginationButton>
    </div>
  );
};

export default Pagination;
