export const SWITCH_SAUCE = 'SWITCH_SAUCE'

 export const switchSelection = (sauce) => {
   return{
     type:'SWITCH_SAUCE',
      payload:sauce
   }
 }
