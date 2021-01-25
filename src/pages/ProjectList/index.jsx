import qs from "qs";
import { useEffect, useState } from "react";

import { List } from "./List";
import { SearchPanel } from "./SearchPanel";

import { cleanEmpty } from "utils";
import { useDebounce } from "hooks/useDebounce";

const API_URL = process.env.REACT_APP_API_URL;

const ProjectList = () => {
  const [params, setParams] = useState({ name: "", userId: "" });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const debouncedParams = useDebounce(params, 200);

  useEffect(() => {
    fetch(
      `${API_URL}/projects?${qs.stringify(cleanEmpty(debouncedParams))}`
    ).then(async (res) => {
      res.ok && setList(await res.json());
    });
  }, [debouncedParams]);

  useEffect(() => {
    fetch(`${API_URL}/users`).then(async (res) => {
      res.ok && setUsers(await res.json());
    });
  }, []);

  return (
    <div>
      <SearchPanel users={users} params={params} setParams={setParams} />
      <List list={list} users={users} />
    </div>
  );
};

export default ProjectList;
