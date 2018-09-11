
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

global.store = mockStore({
  "menusPeep":{
    "meals":[],
    "isFetching":false
  },
  "menusForTheDay":{
    "menus":[],
    "isFetching":false
  },
  "auth":{
    "user":{
      "id":"e20ac257-86cc-4a6f-a619-0249a201c475",
      "fullName":"Otse Obande",
      "username":"otseobande",
      "email":"mealbooker@gmail.com",
      "role":"caterer"
    },
    "loggedIn":true
  },
  "resetPassword":{
    "mailSent":false,
    "resetSuccessful":false
  },
  "orderHistory":{
    "isFetching":true,
    "orders":[],
    "pagination":{}
  },
  "catererMeals":{
    "meals":[],
    "isFetching":false,
    "pagination":{"page":1}},
    "catererMenus":{
      "menus":[],
      "isFetching":true,
      "pagination":{}
    },
    "router":{
      "location":{
        "pathname":"/",
        "search":"",
        "hash":"",
        "key":
        "p8am6r"
      },
      "action":"POP"
    }
  }
)