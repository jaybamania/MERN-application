import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Add from "@material-ui/icons/Add";
const useStyles = makeStyles({
  root: {
    "& label": {
      marginTop: -3, // fix the icon alignment issue
    }
  },
  label: {
    display: "inline-flex",
    alignItems: "center"
  }
});

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      label={
        <div className={classes.label}>
          <span>My Label</span>
          <Add />
        </div>
      }
      variant="outlined"
    />
  );
}