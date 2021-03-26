URL = "https://todo-list-80cc3-default-rtdb.firebaseio.com/List.json"

export const updateDatabase = () => {
    const data = fetch(URL)
        .then(response => {
            return response.json();
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

export const saveData = (ToDoList) => {
    const response = fetch(URL, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ToDoList),
    }).then(response => {
        return response
    }).catch(err => {
        return err
    });
    return response
}