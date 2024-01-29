function solution(phone_number) {
 
  const lastFourDigits = phone_number.slice(-4);


  const maskedPhoneNumber = '*'.repeat(phone_number.length - 4) + lastFourDigits;

  return maskedPhoneNumber;
}