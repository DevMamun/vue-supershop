import ItemDetails from '../components/views/ItemDetails.vue'
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
  }
]