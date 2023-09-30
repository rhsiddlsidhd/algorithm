function solution(n, k) {
  const yakitoriPricePerPortion = 12000;  
  const drinkPrice = 2000;  
  const portionsEaten = Math.floor(n / 10); 
  
 
  const totalYakitoriPrice = n * yakitoriPricePerPortion;
  const totalDrinkPrice = k * drinkPrice;
  

  const discountedDrinkPrice = Math.min(portionsEaten, k) * drinkPrice;
  
 
  const totalPrice = totalYakitoriPrice + totalDrinkPrice - discountedDrinkPrice;
  
  return totalPrice;
}
