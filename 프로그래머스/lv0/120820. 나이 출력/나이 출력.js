function solution(age) {
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age;
    return birthYear;
}