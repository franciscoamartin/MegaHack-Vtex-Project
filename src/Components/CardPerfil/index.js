import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    borderRadius: "8px",
    margin: "40px",
  },
  details: {
    display: "flex",
    width: "100%",
    height: "100px",
    border: "1px",
  },
  buttonLogout: {
    marginRight: "auto",
  },
  nameChat: {
    float: "left",
  },
  chat: {
    display: "flex",
    width: "100%",
    height: "100px",
    border: "1px",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "auto",
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Atendimento
            </Typography>
          </CardContent>
          <CardContent className={classes.buttonLogout}>
            <Button variant="contained" color="secondary">
              DESCONECTAR
            </Button>
          </CardContent>
        </div>

        <div className={classes.chat}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Marcelo
            </Typography>
          </CardContent>
          <CardContent className={classes.nameChat}>
            <Typography component="h5" variant="h5">
              Marcelo Silva
            </Typography>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
