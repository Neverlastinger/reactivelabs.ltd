import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

export default function Popup({ isOpen, onClose, title, children }) {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Dialog open={isOpen} onClose={onClose}>
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>
          <DialogContentText>{children}</DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
