for (let index = 0; index < 10000; index++) {
    let divisorTotal = 0;
    for(let i=1;i<=index/2;i++)
      {
          if(index%i === 0)
           {
             divisorTotal += i;
           }
      }
      if(divisorTotal === index && divisorTotal !== 0)
         {
        console.log(`${index} is a perfect number.`);
         } 
}