let total_cat = 44
        let cat_in_a_row = 6
        let number_row = Math.floor(total_cat /cat_in_a_row)
        let rest = total_cat - (cat_in_a_row * number_row) 
        let cats_missing_for_the_new_row = cat_in_a_row - rest
        let cats_lefts_outside= rest
        console.log( " ci sono " + number_row + " file di gatti e ne mancano " + cats_missing_for_the_new_row + " per una nuova fila, con un avanzo di " + rest  )
   
