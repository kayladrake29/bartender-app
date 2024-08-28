export interface Order {
  id: number;
  cocktailName: string;
  status: 'pending' | 'preparing' | 'ready';
}

