import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {

  const users = [
    { id: 1, name: 'Ícaro'},
    { id: 2, name: 'Juliane'},
    { id: 3, name: 'Miguel'}
  ]
  
  return response.json(users);
}