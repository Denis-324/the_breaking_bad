/* eslint-disable camelcase */
/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomDataAction } from "../../store/actions/random";
import { getRandomData } from "../../store/selectors/random";
import СharactersList from "../../components/СharactersPage/СharactersList";

const RandomPage = () => {
  const dispatch = useDispatch();
  const character = useSelector(getRandomData);
  useEffect(() => {
    dispatch(fetchRandomDataAction());
  }, []);
  return (
    <div>
      <СharactersList character={character} />
    </div>
  );
};

export default RandomPage;
