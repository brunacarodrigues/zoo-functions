const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Teste se a função retorna undefined caso não passe nenhum parâmetro', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Teste se ao passar nenhum parâmetro, a função retorna um objeto', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Teste se ao passar Monday e 9:00 AM, a função irá retornar que o Zoo está fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Teste se ao passar Tuesday e 9:00 AM, a função irá retornar que o Zoo está aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Teste se ao passar Wednesday e 9:00 PM, a função irá retornar que o Zoo está fechado', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
});
