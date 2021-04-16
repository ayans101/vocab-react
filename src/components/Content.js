import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    height: '100%',
    width: '100%',
    border: 'none',
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

export default function Content(props) {
  const { word } = props;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {getCap(word.name)}
        </Typography>
        {word.lexicalEntries.map((lexicalEntry, id) => (
          <div key={id}>
            <Typography className={classes.pos} color="textSecondary">
              {bull}
              {lexicalEntry.lexicalCategory.id}
            </Typography>
            {lexicalEntry.entries.map((entry, _id) => (
              <div key={_id}>
                {entry.senses.map((sense, __id) => (
                  <div key={__id}>
                    {sense.definitions.map((definition, ___id) => (
                      <div key={___id}>
                        <Typography variant="body2" component="p">
                          {definition}
                        </Typography>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            <br />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
