import { IAccessInfo } from "./IAccessInfo";

type IGrant = Omit<IAccessInfo, "role" | "extend">;

interface IGrants {
  [role: string]: {
    grants?: IGrant[];
    score?: number;
    $extend?: Record<string, any>;
  };
}

export { IGrants, IGrant };
