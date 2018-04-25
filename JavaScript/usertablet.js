var  names = [  
    {  
       "id":1,
       "first_name":"Geir",
       "last_name":"Nilsen",
       "email":"geirsuper@gmail.com",
       "phone":"66644999",
       "adress":"Heim te'a mor"
    },
    {  
       "id":2,
       "first_name":"Pearle",
       "last_name":"Tomaino",
       "email":"ptomaino1@acquirethisname.com",
       "phone":"256-129-4031",
       "adress":"7825 Summit Street"
    },
    {  
       "id":3,
       "first_name":"Catharine",
       "last_name":"Cordelette",
       "email":"ccordelette2@eepurl.com",
       "phone":"779-841-6655",
       "adress":"22611 Nobel Junction"
    },
    {  
       "id":4,
       "first_name":"Milton",
       "last_name":"Clancey",
       "email":"mclancey3@ustream.tv",
       "phone":"610-940-0802",
       "adress":"4033 Basil Junction"
    },
    {  
       "id":5,
       "first_name":"Phylis",
       "last_name":"Cordes",
       "email":"pcordes4@berkeley.edu",
       "phone":"332-780-5205",
       "adress":"31703 Vidon Circle"
    },
    {  
       "id":6,
       "first_name":"Lodovico",
       "last_name":"Pietz",
       "email":"lpietz5@live.com",
       "phone":"173-445-1402",
       "adress":"22 Arapahoe Court"
    },
    {  
       "id":7,
       "first_name":"Christen",
       "last_name":"Mugridge",
       "email":"cmugridge6@ebay.com",
       "phone":"417-694-9231",
       "adress":"21 Spohn Alley"
    },
    {  
       "id":8,
       "first_name":"Josh",
       "last_name":"Robotham",
       "email":"jrobotham7@geocities.com",
       "phone":"435-877-1994",
       "adress":"7 Algoma Center"
    },
    {  
       "id":9,
       "first_name":"Lelia",
       "last_name":"Anthiftle",
       "email":"lanthiftle8@nydailynews.com",
       "phone":"630-715-7842",
       "adress":"3426 Bartillon Parkway"
    },
    {  
       "id":10,
       "first_name":"Lew",
       "last_name":"Spilisy",
       "email":"lspilisy9@harvard.edu",
       "phone":"170-553-0561",
       "adress":"78712 Oneill Avenue"
    }
 ]

function findObjectByKey(value) {
        for (var i = 0; i < names.length; i++) {
            if (names[i].id === value) {
                return names[i];
            }
        }
        return 'did not find';
    }




function flyttMeg(myid) {
  var o = findObjectByKey(1 );
		console.log(o);
  var nachos = "";
  nachos += '<dt> Contact Info </dt>'
  nachos += '<dd>' + ' Full Name: ' + o.last_name + ' , ' + o.first_name + '</dd>'
  nachos += '<dd>' + 'Email: ' + o.email + ' ' + '</dd>'
  nachos += '<dd>' + 'Adress: ' + o.adress + ' ' + '</dd>'
  nachos += '<dd>' + 'PhoneNumber: ' + o.phone + ' ' + '</dd>'
  nachos += '<dd>' + ' '  + '</dd>'
  

document.querySelector('#listme').innerHTML = nachos;
}
flyttMeg()
