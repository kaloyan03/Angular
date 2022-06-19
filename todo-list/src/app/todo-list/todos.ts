export interface Todo {
    title: string;
    description: string;
    isDone: boolean;
}

export const todos = [
    {
        id: 1,
        title: 'Wash the dishes',
        description: 'The dishes must be washed',
        isDone: false,
      },
      {
        id: 2,
        title: 'Clean your room',
        description: 'The room must be cleaned',
        isDone: false,
      },
      {
        id: 3,
        title: 'Get the car to the service',
        description: 'Car must be driven in the service',
        isDone: false,
      }
    ]

