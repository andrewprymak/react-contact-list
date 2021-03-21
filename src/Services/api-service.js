URL = 'https://fe01-5081b-default-rtdb.firebaseio.com/List.json';

export const updateDatabase = () => {
    const data = fetch(URL)
      .then(responce => {
        return responce.json();
      }).then(data => {
        if (data !== null) {
            return data
        }
      })
      .catch(err => {
          return err
      })
      return data;
  }

  export const saveData = (contactList) => {
   const responce = fetch(URL, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactList),
    }).then(responce => {
      return responce
    }).catch(err => {
      return err
    });
    return responce;
  }