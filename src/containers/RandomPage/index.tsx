/* eslint-disable camelcase */
/* eslint-disable no-undef */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomDataAction } from "../../store/actions/random";
import { getRandomData } from "../../store/selectors/random";
import –°haractersList from "../../components/–°haractersPage/–°haractersList";

const RandomPage = () => {
  const dispatch = useDispatch();
  const character = useSelector(getRandomData);
  useEffect(() => {
    dispatch(fetchRandomDataAction());
  }, []);
  return (
    <div>
      <–°haractersList character={character} />
    </div>
  );
};

export default RandomPage;
