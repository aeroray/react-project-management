import qs from "qs";
import { useEffect, useState } from "react";

import { List } from "./List";
import { SearchPanel } from "./SearchPanel";

import { cleanEmpty } from "utils";
import { useDebounce } from "hooks/useDebounce";
import { useHttp } from "hooks/useHttp";

const ProjectList = () => {
  const [params, setParams] = useState({ name: "", userId: "" });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);

  const client = useHttp();

  const debouncedParams = useDebounce(params, 200);

  useEffect(() => {
    client("projects", { data: cleanEmpty(debouncedParams) }).then(setList);
  }, [debouncedParams]);

  useEffect(() => {
    client("users").then(setUsers);
  }, []);

  return (
    <div>
      <SearchPanel users={users} params={params} setParams={setParams} />
      <List list={list} users={users} />
    </div>
  );
};

export default ProjectList;
