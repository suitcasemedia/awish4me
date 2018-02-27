// const api = "http://localhost:3005"
const api = "http://ec2-34-210-87-178.us-west-2.compute.amazonaws.com/"



const headers = {
  'Accept': 'application/json',
  
}


export const fetchWishes = () =>
  fetch(`${api}`, { headers })
    .then(res => res.json().catch(res => res.error.json()) )
    
    //
    
export const fetchWish = (id) =>
  fetch(`${api}/wishes/${id}`, { headers })
    .then(res => res.json())
    
      