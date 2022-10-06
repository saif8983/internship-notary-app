import React from "react";
import { resCompanyData } from "../api/company";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import style from "../utils/style";
const TableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    resCompanyData()
      .then((item) => setData(item.data.companies))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={style.TableHeadingCss}>Name</TableCell>
            <TableCell sx={style.TableHeadingCss} align="center">
              Email
            </TableCell>
            <TableCell sx={style.TableHeadingCss} align="center">
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="center">{item.email}</TableCell>
              <TableCell align="center">{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
