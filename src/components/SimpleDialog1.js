import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



function SimpleDialog1(props) {
  const { onClose, selectedRow, open } = props;

  const handleClose = () => {
    onClose();
  };

  // Data to display in the dialog, could adjust based on what's passed
  const dataToDisplay1 = [
    { label: 'Name', value: selectedRow?.name },
    { label: 'Symbol', value: selectedRow?.symbol },
    { label: 'Price', value: selectedRow?.price },
  ];

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Token Information</DialogTitle>
      <List sx={{ pt: 0 }}>
        {dataToDisplay1.map(({ label, value }) => (
              <Box
              alignItems="center"
              sx={{
                p: 1,
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
          <Paper variant="outlined" elevation={3} />
          <ListItem disableGutters key={label}>
            <ListItemText primary={`${label}: ${value}`} />
          </ListItem>
          </Box>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog1.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedRow: PropTypes.object, // Change to reflect the type of data you're passing
};

export default SimpleDialog1;

