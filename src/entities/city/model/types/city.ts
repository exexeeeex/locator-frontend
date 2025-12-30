import type { BaseEntity } from "@/shared/types";
import type { Region } from ".";

export interface City extends BaseEntity {
  name: string;
  point: {
    type: string;
    coordinates: [number, number];
  };
  region: Region;
}
