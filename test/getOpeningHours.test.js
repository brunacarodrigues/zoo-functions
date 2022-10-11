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
  it('Teste ao passar `Satur` e `10:00-AM` deve lançar uma exceção com a mensagem: `The day must be valid. Exemplo: Tuesday`', () => {
    function testGetOpeningHours() {
      getOpeningHours('Satur', '10:00-AM');
    }
    expect(testGetOpeningHours).toThrowError('The day must be valid. Example: Monday');
  });
  it('Teste se ao não passar números de hora retorna um erro', () => {
    function testHour() {
      getOpeningHours('Saturday', 'H9:00-AM');
    }
    expect(testHour).toThrowError('The hour should represent a number');
  });
  it('Teste ao passar `Sunday` e `15:00-PM` deve lançar uma exceção com a mensagem: `The hour must be between 0 and 12`', () => {
    function testHourValue() {
      getOpeningHours('Monday', '15:00-PM');
    }
    expect(testHourValue).toThrowError('The hour must be between 0 and 12');
  });
  it('Teste se ao passar "Monday" e "09-b0-AM" deve lançar uma exceção com a mensagem: "The minutes should represent a number"', () => {
    function testMinutes() {
      getOpeningHours('Monday', '09:b0-AM');
    }
    expect(testMinutes).toThrowError('The minutes should represent a number');
  });
  it('Teste se ao não passar AM e PM retorna um erro', () => {
    function testClock() {
      getOpeningHours('Friday', '09:00-HR');
    }
    expect(testClock).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Teste se ao passar `Friday` e `08:60-AM` deve lançar uma exceção com a mensagem: `The minutes must be between 0 and 59`', () => {
    function testMinutesValue() {
      getOpeningHours('Friday', '08:60-AM');
    }
    expect(testMinutesValue).toThrowError('The minutes must be between 0 and 59');
  });
});
//requisito 16