function solution(D) {
    // Initial output object with days as key and corresponding values initialized to 0
    const output = {'Mon': 0, 'Tue': 0, 'Wed': 0, 'Thu': 0, 'Fri': 0, 'Sat': 0, 'Sun': 0};
    
    // Convert input dictionary keys that are in YYYY-MM-DD format to Date objects and sort them
    const sortedDates = Object.keys(D).map(d => new Date(d)).sort((a, b) => a - b);
  
    // Loop through sorted dates and add corresponding values to the output dictionary
    sortedDates.forEach(date => {
      const dayOfWeek = date.toLocaleString('en-us', {weekday: 'short'});
      output[dayOfWeek] += D[date.toISOString().substring(0, 10)];
    });
  
    // Checking the missing days in the input dictionary
    const missingDays = [];
    for (let i = 1; i <= 7; i++) {
      const dayOfWeek = new Date(`2020-01-0${i}`).toLocaleString('en-us', {weekday: 'short'});
      if (!output[dayOfWeek]) {
        missingDays.push(dayOfWeek);
      }
    }
  
    // Add missing days to the output dictionary with values equal to the mean of the previous and next day's values
    missingDays.forEach(day => {
      const dayIndex = Object.keys(output).indexOf(day);
      const prevDay = Object.keys(output)[dayIndex - 1];
      const nextDay = Object.keys(output)[dayIndex + 1];
      output[day] = (output[prevDay] + output[nextDay]) / 2;
    });
  
    return output;
  }
  