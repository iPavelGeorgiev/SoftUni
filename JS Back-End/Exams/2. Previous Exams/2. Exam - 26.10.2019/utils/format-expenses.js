module.exports = function (expenses) {
   return expenses.map(x => {
       let {
           date,
           total
       } = x;

       const year = date.getFullYear();
       const month = `0${date.getMonth()+1}`.slice(-2);
       const day = `0${date.getDate()}`.slice(-2);
       x.date = `${year}-${month}-${day}`
       x.total = total.toFixed(2);

       return x;
   });
}