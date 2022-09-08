import {DurationHandlerPipe} from "./duration-handler.pipe";

describe('DurationHandlerPipe', () => {
  const pipe = new DurationHandlerPipe();

  it('should transform 55 to 55 min', () => {
    expect(pipe.transform(55)).toBe('55 min');
  });

  it('should transform 120 to 2 h', () => {
    expect(pipe.transform(120)).toBe('2 h');
  });

  it('should transform 135 to 2 h 15 min', () => {
    expect(pipe.transform(135)).toBe('2 h 15 min');
  });
});
