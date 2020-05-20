import React, { useState, ChangeEvent } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import AutoComplete, { DataSourceType } from "./autoComplete";

interface DataProps{
  value: string,
  number: number
}
interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}

const defaultAutoComplete = () => {
  const company = [
    "阿里巴巴",
    "腾讯",
    "字节跳动",
    "滴滴",
    "美团",
    "拼多多",
    "京东",
    "有赞",
  ];
  const companyWithNumber = [
    {
      value: "阿里巴巴",
      number: 1,
    },
    {
      value: "腾讯",
      number: 2,
    },
    {
      value: "滴滴",
      number: 3,
    },
    {
      value: "美团",
      number: 4,
    },
    {
      value: "拼多多",
      number: 5,
    },
    {
      value: "有赞",
      number: 6,
    },
  ];
  // const handleFetch = (query: string) => {
  //   return companyWithNumber.filter((item) => item.value.includes(query));
  // };
  const handleFetch = (query:string)=>{
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(res => res.json())
      .then(({ items }) => {
        console.log(items)
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
      })
  }
  const handleSelect = (value: DataSourceType) => {
    console.log("select", value);
  };
  const renderOption = (item: DataSourceType<GithubUserProps>) => {
    return (
      <>
        <h2>{item.login}</h2>
        <p>{item.url}</p>
      </>
    );
  };
  return (
    <>
      <AutoComplete
        fetchSuggestions={handleFetch}
        onSelect={handleSelect}
        renderOption={renderOption}
      />
    </>
  );
};

storiesOf("AutoComplete Component", module).add(
  "AutoComplete",
  defaultAutoComplete
);
