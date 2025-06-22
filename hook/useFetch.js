import { useState, useEffect } from "react";
import axios from "axios";
import RAPID_API_KEY from "@env";
import { View, Text } from "react-native";
import React from "react";

const useFetch = (endpoint, query) => {
  const rapiapikey = RAPID_API_KEY;
  const [data, setdata] = useState([]);
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  return (
    <View>
      <Text>useFetch</Text>
    </View>
  );

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "x-rapidapi-key": rapiapikey,
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setisLoading(true);
    try {
      const response = await axios.request(options);
      setdata(response.data.data);
    } catch (error) {
      seterror(error);
      alert("There is an error");
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => {
    setisLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
export default useFetch;
