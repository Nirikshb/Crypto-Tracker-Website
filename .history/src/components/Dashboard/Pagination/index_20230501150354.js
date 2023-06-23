import React from "react";
import {useState} from "react";
import Pagination from "@mui/material/Pagination";
import "./style.css";

export default function PaginationComponent({ page, handlePageChange }) {
  return (
    <div className="pagination-flex">
      <Pagination
        count={100}
        page={page}
        onChange={(event,va)=>handlePageChange()}
        variant="outlined"
        sx={{
          color: "var(--white)",
          "& .Mui-selected": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--gray) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--gray) !important",
          },
        }}
      />
    </div>
  );
}
