describe('testMultiplication', () => {
  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const five: Dollar = new Dollar(5);
      expect(five.times(2)).toBe(10);
  });
});