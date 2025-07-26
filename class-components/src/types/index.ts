export interface IVehicle {
  properties: {
    name: string;
    model: string;
    vehicle_class: string;
    manufacturer: string;
    length: string;
    cost_in_credits: string;
    crew: string;
    passengers: string;
    max_atmosphering_speed: string;
    cargo_capacity: string;
    consumables: string;
    films: string[];
    pilots: string[];
    url: string;
    created: string;
    edited: string;
  };
  uid: string;
}

export interface VehiclesResponse {
  message: string;
  total_records: number;
  total_pages: number;
  previous: string | null;
  next: string | null;
  success: boolean;
  results: IVehicle[];
  result?: IVehicle[];
}
export type VehicleResponse = Omit<VehiclesResponse, 'results' | 'result'> & {
  result: IVehicle;
};
