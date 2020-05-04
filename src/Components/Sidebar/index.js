import React, { useEffect } from "react";
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
import StarIcon from "@material-ui/icons/Star";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import FlagIcon from "@material-ui/icons/Flag";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { useStyles } from "./styles";

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(true);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

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
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>Atendimento</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/avaliacoes">
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText>Avaliação</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/vendas">
              <ListItemIcon>
                <LoyaltyIcon />
              </ListItemIcon>
              <ListItemText>Vendas</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/treinamentos">
              <ListItemIcon>
                <FitnessCenterIcon />
              </ListItemIcon>
              <ListItemText>Treinamentos</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/destaques">
              <ListItemIcon>
                <FlagIcon />
              </ListItemIcon>
              <ListItemText>Destaques</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/comissoes">
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText>Comissões</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </div>
    </div>
  );
}
