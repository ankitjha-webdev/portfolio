import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Bachelor } from './Bachelor';

const AntTabs = styled(Tabs)({
  borderBottom: '20px solid #e8e8e8',
  borderRadius: '5px',
  marginBottom: '20px',
  width: '100%',
  margin: 'auto',
  padding: '.5rem .5rem',
  height: '100%',
  boxShadow: '0px 0px 10px #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: '#2a7668',
    height: '30px',
    width: '30px',
    borderRadius: '.5rem',
    marginTop: '10px',
    marginBottom: '10px',
    zIndex: '-5',
   
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  width:'100%',
  minWidth: 0, 
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
  },
  fontWeight: theme.typography.fontWeightRegular,
  // marginRight: theme.spacing(2),
  color: 'rgba(255, 255, 255, 0.6)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    color: '#fff',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: '#1fe1be',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#1fe1be',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Education() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <h5>Where I graduated from!</h5>
      <h2> Education</h2>
      <div className="container" style={{ paddingTop: "0rem"}}>
      <Box sx={{ width: '22rem', marginX:'auto' }}>
        <Box sx={{}}>
          <AntTabs value={value} onChange={handleChange} aria-label="ant example">
            <AntTab label="Bachelor" {...a11yProps(0)} />
            {/* <AntTab label="Intermediate" {...a11yProps(1)} />
            <AntTab label="Matriculation" {...a11yProps(2)} /> */}
          </AntTabs>
          <Box sx={{ p: 2 }} />
        </Box>
        <div className="">
        <TabPanel value={value} index={0}>
          <Bachelor/>
        </TabPanel>
        {/* <TabPanel value={value} index={1}>
          <Intermediate/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Matriculation/>
        </TabPanel> */}
        </div>
      </Box>
    </div>
    </section>
  );
}
