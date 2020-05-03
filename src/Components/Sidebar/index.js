import React from "react";
import clsx from "clsx";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import { useStyles } from "./styles";

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="containerSideBar">
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <List onMouseOver={handleDrawerOpen} onMouseOut={handleDrawerClose}>
            <ListItem button component={Link} to="/atendimento">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Atendimento</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/avaliacoes">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>Avaliação</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/vendas">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>Vendas</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/treinamentos">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>Treinamentos</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/destaques">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>Destaques</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/comissoes">
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>Comissões</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </div>
    </div>
  );
}
