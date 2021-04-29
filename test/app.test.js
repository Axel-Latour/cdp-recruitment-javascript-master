const { main } = require('../app');

jest.mock('../services/commandService');

const { executeCommandFromArgs } = require('../services/commandService');

describe('app starts', () => {
  process.argv = ['node', 'app.js', '--count'];
  it('should call executeCommandFromArgs method with command options', () => {
    const executeCommandFromArgsMock = jest.fn();

    executeCommandFromArgs.mockImplementation(executeCommandFromArgsMock);

    main();

    expect(executeCommandFromArgsMock).toHaveBeenCalledWith(['--count']);
  });
});

