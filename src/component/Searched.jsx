import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
function Searched() {
  const [SearchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSerched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };
  useEffect(() => {
    getSerched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {SearchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
    coursor: pointer;
  }
  a {
    text-deceration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    text-deceration: none;
  }
`;
export default Searched;
