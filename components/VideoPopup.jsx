import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  dialog: {
    maxHeight: "1200px",
    height: "fit-content",
    width: "1200px",
    top: "5vh",
  },
  container: {
    alignItems: "unset",
    height: "100vh",
  },
}));

function VideoPopup(props) {
  
  const classes = useStyles();

  return (
    <Dialog
      classes={{ container: classes.container, paper: classes.dialog }}
      open={props.open}
      onClose={props.handleClose}
    >
      <DialogContent>
        <ReactPlayer height="460px" width="100%" url="https://www.youtube.com/watch?v=hl6ibkLDvLk" />
      </DialogContent>
    </Dialog>
  );
}

export default VideoPopup;
