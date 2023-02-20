import customerMemoryRepository from '../../../../infrastructure/repositories/memory/customer.memory.repository';
import { Customer } from '../../../../domain/entities/customer.entity'; 
import createCustomerHandler from '../../../../application/handlers/customer/create.customer.handler'; 
import { CreateCustomerCommand } from '../../../../application/commands/customer/create.customer.command'; 

describe('Create Customer', () => {
  it('should create a customer', async () => {
    const costumerMock = Customer.create('Pepito Perez', '12345678', 'pami', 'pepitoperez@yopmail.com');
    customerMemoryRepository.save = jest.fn().mockResolvedValueOnce(costumerMock);
    customerMemoryRepository.findByIdentityCard = jest.fn().mockResolvedValueOnce(null);
    customerMemoryRepository.findByName = jest.fn().mockResolvedValueOnce(null);
    await createCustomerHandler.execute(new CreateCustomerCommand('Pepito perez', '12345678', 'pami', 'pepitoperez@yopmail.com'));
    expect(customerMemoryRepository.save).toBeCalled();
  });

  it('should throw an error if identity card is invalid', async () => {
    const command = new CreateCustomerCommand('Pepito Perez', 'abcdefg', 'pami', 'pepitoperez@yopmail.com');
    await expect(createCustomerHandler.execute(command)).rejects.toStrictEqual( 
        new Error('Invalid identity card'),
    );
  });

  it('should throw an error if email is invalid', async () => {
    const command = new CreateCustomerCommand('Pepito Perez', '12345678', 'pami', 'pepitoperez@yopmail');
    await expect(createCustomerHandler.execute(command)).rejects.toStrictEqual(
        new Error('Invalid email'),
    );
  });

  it('should throw an error if customer already exists', async () => {
    const costumerMock = Customer.create('Pepito Perez', '12345678', 'pami', 'pepitoperez@yopmail.com');
    customerMemoryRepository.findByIdentityCard = jest.fn().mockResolvedValueOnce(costumerMock);

    const command = new CreateCustomerCommand('Pepito Perez', '12345678', 'pami', 'pepitoperez@yopmail.com');
    await expect(createCustomerHandler.execute(command)).rejects.toStrictEqual(
        new Error('Customer already exists'),
    );
  });
});