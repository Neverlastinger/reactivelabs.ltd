import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Popup({ isOpen, onClose, title, children }) {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Dialog
        open={isOpen}
        onClose={onClose}
      >
        {title && (
          <DialogTitle>{title}</DialogTitle>
        )}
        <DialogContent>
          <DialogContentText>
            {children}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
