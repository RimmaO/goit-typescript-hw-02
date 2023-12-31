/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayType {
  SATURDAY,
  SUNDAY,
}

function isWeekend(day: DayType): boolean {
  return day === DayType.SATURDAY || day === DayType.SUNDAY;
}
