import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./style.css";

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
    marginLeft: "600px",
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
        <hr />
        <div>
          <div className="left-chat">
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title="Marcelo dos Santos"
              subheader="Olá, tudo bem? Gostaria..."
            />
            <hr />
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title="Marcos Vitor"
              subheader="Olá, gostaria de ajuda em ..."
            />
            <hr />
          </div>
          <div className="right-chat">
          <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title="Marcos Vitor"
              subheader="Olá, gostaria de ajuda em um produto."
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
