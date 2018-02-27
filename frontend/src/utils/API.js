const api = "http://localhost:3005"



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
    
      