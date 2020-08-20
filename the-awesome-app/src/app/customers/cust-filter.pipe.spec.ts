import { CustFilterPipe } from './cust-filter.pipe';
import { Customer } from './model/customer';

fdescribe('CustFilterPipe', () => {

  it('create an instance', () => {

    const pipe = new CustFilterPipe();
    expect(pipe).toBeTruthy();

  });

  it('shoud return the data as the result for no search key', () => {

    const pipe = new CustFilterPipe();
    const input = [new Customer(), new Customer];
    const result = pipe.transform(input, "");
    expect(result).toBe(input);

  })

  it('shoud return the filterted data as the result for a search key', () => {

    const pipe = new CustFilterPipe();
    const input = [new Customer(1, "Google", "Mumbai"), new Customer(2, "MS", "Bangalore")];
    const result = pipe.transform(input, "Bangalore");
    expect(result.length).toBe(1);

  })

});
