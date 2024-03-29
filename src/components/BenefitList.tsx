import {Component} from 'solid-js';

import Box from '@suid/material/Box';
import Card from '@suid/material/Card';
import Divider from '@suid/material/Divider';
import List from '@suid/material/List';
import ListItem from '@suid/material/ListItem';
import ListItemIcon from '@suid/material/ListItemIcon';
import ListItemText from '@suid/material/ListItemText';

import CheckIcon from '@suid/icons-material/Check';

import './BenefitList.css';

const BenefitList: Component = () => {
  return (
    <Box width="350px" ml="auto" mr="auto">
      <div class="grow">
        <Card>
          <List sx={{width: '100%', 'max-width': 350, bgcolor: 'background.paper'}}>
            <ListItem>
              <ListItemIcon>
                <CheckIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="0% Fees"
                secondary="Direct payment from customers to you with no third-parties"
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemIcon>
                <CheckIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="No Chargebacks"
                secondary="Once funds have been confirmed, refunds are at your discretion"
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemIcon>
                <CheckIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Total Control"
                secondary="Complete control over branding, checkout, and customer experience"
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemIcon>
                <CheckIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText primary="Sovereign Wallets" secondary="Your keys, your crypto" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemIcon>
                <CheckIcon fontSize="large" />
              </ListItemIcon>
              <ListItemText
                primary="Free & Open Source Forever"
                secondary="MIT licensed source code for everyone"
              />
            </ListItem>
          </List>
        </Card>
      </div>
    </Box>
  );
};

export default BenefitList;
