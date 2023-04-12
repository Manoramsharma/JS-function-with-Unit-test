describe('solution', () => {
    it('should return the correct output given a valid input dictionary', () => {
      const input = {
        '2020-01-01': 100,
        '2020-01-02': 200,
        '2020-01-04': 300,
        '2020-01-05': 400,
        '2020-01-06': 500,
        '2020-01-08': 600,
        '2020-01-09': 700,
      };
      const expectedOutput = {
        'Mon': 100,
        'Tue': 200,
        'Wed': 0,
        'Thu': 300,
        'Fri': 400,
        'Sat': 500,
        'Sun': 350,
      };
      expect(solution(input)).toEqual(expectedOutput);
    });
  });
  // Additional tests can also be written to ensure full coverage of the function's behavior.