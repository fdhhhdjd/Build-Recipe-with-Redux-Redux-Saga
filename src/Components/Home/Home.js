import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as types from "../../redux/Action-types";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import "./Home.css";
import RecipesMap from "../../Pages/Recipes/RecipesMap";
import Navbar from "../../Pages/Navbar/Navbar";
import { ToastContainer, toast, style } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Home() {
  const classes = useStyles();
  const Gird = GirdStyles();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("mango");
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.data);
  console.log(recipes);
  const updateSearch = () => {
    setQuery(search);
    setSearch("");
  };
  const SubmitDateSearch = (e) => {
    e.preventDefault();

    setQuery(search);

    setSearch("");
  };

  useEffect(() => {
    dispatch({ type: types.GET_RECIPE_START, query });
  }, [query]);
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <div className="app">
        <h2>Recipe From Tai Heo Dev 😊</h2>
        <br />
        <ToastContainer />
        <form
          className={classes.root}
          noValidate
          autoComplete="off"
          onSubmit={SubmitDateSearch}
        >
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            style={{ width: "80px", height: "55px" }}
            onClick={updateSearch}
          >
            Search 😎
          </Button>
        </form>

        <br />
        <Grid container className={Gird.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={2}>
              {recipes &&
                recipes.hits &&
                recipes.hits.map((item, index) => (
                  <Grid key={index} item>
                    <RecipesMap item={item} index={index} />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
    },
  },
}));
const GirdStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));
export default Home;
