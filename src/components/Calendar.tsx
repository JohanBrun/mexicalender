import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function Calendar() {
  return (
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Dato</TableCell>
                    <TableCell>Oppdrag</TableCell>
                    <TableCell>Gutta</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              <TableRow></TableRow>
            </TableBody>
          </Table>
      </TableContainer>
  )
}