export const SWITCH_IG1 = 'SWITCH_IG1'
export const DELETE_IG = 'DELETE_IG'

 export const switchSelection = (ingredient) => {
   return{
     type:'SWITCH_IG1',
      payload:ingredient
   }
 }

 export const deleteIngredient = (ingredient) => {
   return{
     type:'DELETE_IG',
      payload:ingredient
   }
 }
