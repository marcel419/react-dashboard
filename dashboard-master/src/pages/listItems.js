import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import FlashOnIcon from '@material-ui/icons/FlashOn';

import BarChartIcon from '@material-ui/icons/BarChart';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" href="/" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LibraryBooksIcon />
      </ListItemIcon>
      <ListItemText primary="Relatório" href="/" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FlashOnIcon />
      </ListItemIcon>
      <ListItemText primary="Consumo Energético" href="/" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Dados" />
    </ListItem>
    
  </div>
);

export const secondaryListItems = (
  <div> 
      <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  </div>
);
