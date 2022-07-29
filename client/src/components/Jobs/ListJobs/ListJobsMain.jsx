import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import {Button, Container} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { theme } from '../../../theme';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';

function createData(id, jobProfile, application, status, action) {
  return {
    id,
    jobProfile,
    application,
    status,
    action,
  };
}

const rows = [
  createData(1, 'Job Profile 1', 'View Applicants (10)', 'Closed', 'icons'),
  createData(2, 'Job Profile 2', 'View Applicants (10)', 'Active', 'icons'),
  createData(3, 'Job Profile 3', 'View Applicants (10)', 'Closed', 'icons'),
  createData(4, 'Job Profile 4', 'View Applicants (10)', 'Active', 'icons'),
];

console.log(rows);

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'jobProfile',
    numeric: false,
    disablePadding: true,
    label: 'JOB PROFILE',
  },
  {
    id: 'application',
    numeric: false,
    disablePadding: false,
    label: 'APPLICATION',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'STATUS',
  },
  {
    id: 'action',
    numeric: false,
    disablePadding: false,
    label: 'ACTION',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" align='center'>
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            // align={headCell.numeric ? 'right' : 'left'}
            align="center"
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <Box sx={{display:'row', flexDirection:'row', justifyContent:'center', ml:3}}>
              <Typography variant="h5" sx={{fontWeight:theme.typography.fontWeightBold}}>
                {headCell.label}
              </Typography>
              </Box>
              {orderBy === headCell.id ? (
                <Box component="span">
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        // pl: { sm: 2 },
        // pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      <Box sx={{width:'100%', display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',}}>
      <Box flexGrow={1}>
      {numSelected > 0 ? (
        <Typography
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{fontWeight:theme.typography.fontWeightBold }}
          variant="h3"
          id="tableTitle"
          component="div"
        >
          Job List
        </Typography>
      )}
      </Box>
      <Box flexGrow={0}>
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <Button variant="contained" color="info" sx={{width:'100%', maxWidth:'230px', backgroundColor:theme.palette.login.main}}>
            <Typography variant="h5" sx={{fontWeight:theme.typography.fontWeightBold}}>
              Add new job
            </Typography>
          </Button>
        </Tooltip>
      )}
      </Box>
      </Box>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Container sx={{ width: '100%',maxWidth:{xs:'100%'}, pl:{xs:0, lg:'24px'}, pr:{xs:0, lg:'24px'}, m:0, mt:4, }}>
      <Paper sx={{ width: '100%', mb: 2 , backgroundColor:theme.palette.background.default, pt:2}}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ 
              minWidth: 750,
              width:'100%',
            }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      // onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                      align="center"
                    >
                      <TableCell padding="checkbox" align='center'>
                        <Checkbox
                          onClick={(event) => handleClick(event, row.id)}
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align='center'
                      >
                        <Typography variant='h5'>
                        {row.jobProfile}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Button variant='contained' color='info'
                        sx={{backgroundColor:theme.palette.login.main, width:'80%'}}>
                          <Typography variant='h5'>
                            {row.application}
                          </Typography>
                        </Button>
                        </TableCell>
                      <TableCell align="center">
                        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                        {(row.status) == 'Closed' ? (
                          <Typography variant='h5' sx={{backgroundColor:theme.palette.error.bg,p:0.3, color:theme.palette.error.main, width:'70px', textAlign:'center', borderRadius:'35px'}} >
                          {row.status}
                          </Typography>
                        ) : (
                          <Typography variant='h5' sx={{backgroundColor:theme.palette.active.bg, p:.30, color:theme.palette.active.main, width:'70px', textAlign:'center', borderRadius:'35px'}} >
                          {row.status}
                          </Typography>
                        )}
                        </Box>
                        </TableCell>
                      <TableCell align="center">
                        <Box>
                          <IconButton sx={{backgroundColor:theme.palette.secondary.hover, mr:1}}>
                            <RemoveRedEyeIcon fontSize='small' sx={{color:theme.palette.secondary.main}}/>
                          </IconButton>
                          <IconButton sx={{backgroundColor:theme.palette.active.bg,mr:1,ml:1}}>
                            <EditIcon fontSize='small' sx={{color:theme.palette.active.main}}/>
                          </IconButton>
                          <IconButton sx={{backgroundColor:theme.palette.error.bg, ml:1}}>
                            <CloseIcon fontSize='small' sx={{color:theme.palette.error.main}}/>
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </Container>
  );
}
