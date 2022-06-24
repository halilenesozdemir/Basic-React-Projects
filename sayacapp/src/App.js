import clockImage from './images/clockimage.jpg';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import GeriSayim from './components/GeriSayim';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: `url(${clockImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: false,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container maxWidth='sm'>
        <GeriSayim />
      </Container>
    </div>
  );
};

export default App;
