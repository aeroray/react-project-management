import { FC } from "react";

import { User } from "./types";

interface SearchPanelProps {
  users: User[];
  params: { name: string; userId: string };
  setParams: (params: SearchPanelProps["params"]) => void;
}

export const SearchPanel: FC<SearchPanelProps> = ({
  users,
  params,
  setParams,
}) => {
  return (
    <form>
      <div>
        <input
          type="text"
          value={params.name}
          onChange={(e) => setParams({ ...params, name: e.target.value })}
        />
        <select
          value={params.userId}
          onChange={(e) => setParams({ ...params, userId: e.target.value })}
        >
          <option value="">负责人</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
