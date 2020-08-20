import ItemDetails from '../components/views/ItemDetails.vue'
import Test from '../components/views/Test'
import Inventory from '../components/views/Inventory'




export const routes = [
  {
    path : '',
    component : Inventory,
    name : 'HomePage'
  },
  {
    path : '/item/:id',
    component : ItemDetails,
    name : 'ItemDetails'
  },
  {
    path : '/test',
    component : Test
  },
]