import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

 function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
}
