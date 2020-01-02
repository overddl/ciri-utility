const { sum } = require('../src/index.js');

describe('测试SUM函数', () => {
  it('test number + number', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('test number + string', () => {
    expect(sum(1, "2")).toBe("12");
    expect(sum("dasdfsa", 1)).toBe("dasdfsa1");
  });
  it('test string + string', () => {
    expect(sum(1, "2")).toBe("12");
  });

  it('object assignment', () => {
    const data = {one: 1};
    expect(data).toBe({one: 1});
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });
})
