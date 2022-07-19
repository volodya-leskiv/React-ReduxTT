// <reference types="react-scripts" />
export type State = {
  loadData: LoadData;
};

interface LoadData {
  date: string
  base: string
  symbols: string
  amount: number
}
