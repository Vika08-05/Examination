URL = "https://todo-list-80cc3-default-rtdb.firebaseio.com/"

export const updateDatabase = () => {
    const data = fetch(URL)
        .then(responce => {
            return responce.json();
        }).then(data => {
            if (data !== null) {
                return data
            }
            else {
                return []
            }
        })
        .catch(err => {
            return err
        })
    return data;
}
export const saveData = (contactList) => {
    const response = fetch(URL, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactList),
    }).then(response => {
        return response
    }).catch(err => {
        return err
    });
    return response
}