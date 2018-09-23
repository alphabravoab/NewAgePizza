export const SWITCH_IG = 'SWITCH_IG'
export const DESELECT_IG = 'DESELECT_IG'

 export const switchSelection = (ingredient) => {
   return{
     type:'SWITCH_IG',
      payload:ingredient
   }
 }

 export const deleteIngredient = (ingredient) => {
   return{
     type:'DESELECT_IG',
      payload:ingredient
   }
 }
