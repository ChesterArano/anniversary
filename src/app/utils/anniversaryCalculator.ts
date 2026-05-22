export function getOrdinalSuffix(num: number): string {
  if (num % 100 === 11 || num % 100 === 12 || num % 100 === 13) {
    return "th";
  }
  const lastDigit = num % 10;
  if (lastDigit === 1) return "st";
  if (lastDigit === 2) return "nd";
  if (lastDigit === 3) return "rd";
  return "th";
}

export function getAnniversaryText(): string {
  const baseDate = new Date(2023, 4, 22);
  const today = new Date();

  let years = today.getFullYear() - baseDate.getFullYear();
  let months = today.getMonth() - baseDate.getMonth();
  let days = today.getDate() - baseDate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    const adjustedDate = new Date(today.getFullYear() - 1, baseDate.getMonth(), baseDate.getDate());
    const diff = today.getTime() - adjustedDate.getTime();
    const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
    months = Math.floor(daysDiff / 30.44);
    days = Math.floor(daysDiff % 30.44);
  } else if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  const anniversaryNumber = years;

  if (years === 0) {
    let message = `Happy 3rd`;

    if (months > 0) {
      message += ` And ${months} month${months > 1 ? "s" : ""}`;
    }

    if (days > 0) {
      message += ` And ${days} day${days > 1 ? "s" : ""}`;
    }

    message += ` Anniversary`;
    return message;
  } else {
    return `Happy ${years}${getOrdinalSuffix(years)} Anniversary`;
  }
}
