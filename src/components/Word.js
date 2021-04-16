import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '90vw',
    maxWidth: 800,
    margin: 2,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function getCap(name) {
  let s = name;
  return s[0].toUpperCase() + s.slice(1);
}

export default function Word(props) {
  const { word } = props;
  const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          {/* be{bull}nev{bull}o{bull}lent */}
          {getCap(word.name)}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {word.lexicalEntries[0].lexicalCategory.id}
        </Typography>
        <Typography variant="body2" component="p">
          {word.lexicalEntries[0].entries[0].senses[0].definitions[0]}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
