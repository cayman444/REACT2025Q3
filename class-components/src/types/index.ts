export interface IPlace {
  appearances: string[];
  inhabitants: string[];
  name: string;
  description: string;
  id: string;
}

export interface ZeldaPlaceResponse {
  success: boolean;
  count: number;
  data: IPlace[];
}
