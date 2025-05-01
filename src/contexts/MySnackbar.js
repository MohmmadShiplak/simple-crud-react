import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
export default function MySnackbar({open,message}) {

	const action = (
		<React.Fragment>
			<IconButton size="small" aria-label="close" color="inherit">
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	);


  return (
    <div>

      <Snackbar >
        <Alert
      open ={open}
          severity="success"
          variant="filled"
          action={action}
          sx={{ width: '100%' }}
        >
         {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
