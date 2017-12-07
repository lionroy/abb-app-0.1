
app.service('clientservice', function () {
    //to create unique client id
    var uid = 1;
    
    //clients array to hold list of all clients
    var clients = [{
        id: 0,
        'email': 'hello@gmail.com', // unique identifier
        'username': 'Viral',
        'fname': 'Viral',
        'lname': 'Viral',
        // ----   
        // additional parameters
        // details object definition..         
        'clientId': 'vip-973-bc-324',
        'phone': '123-2343-44'
    }];
    
    //save method create a new client if not already exists
    //else update the existing object
    this.save = function (client) {
        if (client.id == null) {
            //if this is new client, add it in clients array
            client.id = uid++;
            clients.push(client);
        } else {
            //for existing client, find this client using id
            //and update it.
            for (c in clients) {
                if (clients[c].id == client.id) {
                    clients[c] = client;
                }
            }
        }

    }

    //simply search clients list for given id
    //and returns the client object if found
    this.get = function (id) {
        for (c in clients) {
            if (clients[c].id == id) {
                return clients[c];
            }
        }

    }
    
    //iterate through clients list and delete 
    //client if found
    this.delete = function (id) {
        for (c in clients) {
            if (clients[c].id == id) {
                clients.splice(c, 1);
            }
        }
    }

    //simply returns the clients list
    this.list = function () {
        return clients;
    }
});

