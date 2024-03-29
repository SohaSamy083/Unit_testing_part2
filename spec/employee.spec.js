/*
const Employee = require("../Employee");
// calculateSalary
describe("Test calculateSalary", () => {
  let emp1;
  // setup&teardown
  // beforeAll()
  beforeEach(() => {
    emp1 = new Employee("ali", 28, 4);
  });
  // cleanup
  // afterAll()
  // afterEach()

  it("Test that salary is 5000 when yearsOfExp <= 5", () => {
    emp1.calculateSalary();
    expect(emp1.salary).toBeLessThan(6000);
  });
  it("Test that salary is 9000 when yearsOfExp > 5", () => {
    emp1.yearsOfExp = 7;
    emp1.calculateSalary();
    expect(emp1.salary).toBe(9000);
  });
});

//setSkills
describe("Test setSkills", () => {
  let emp1;
  beforeEach(() => {
    emp1 = new Employee("ali", 28, 4);
  });

  it("Test set skills correctly", () => {
    emp1.setSkills("js", "node js");
    expect(emp1.skills).toEqual(["js", "node js"]);
    expect(emp1.skills).toContain("js");
  });
});

// setAddress
describe("Test setAddress", () => {
  let emp1;
  beforeEach(() => {
    emp1 = new Employee("ali", 28, 4);
  });

  it("Test set address correctly", () => {
    emp1.setAddress("Egypt", "Qena");
    // expect(emp1.address).toEqual({country:'Egypt',city:'Qena'})
    expect(emp1.address).toEqual(jasmine.objectContaining({ city: "Qena" }));
  });
  it("Test set address correctly as an object", () => {
    emp1.setAddress("Egypt", "Qena");
    expect(emp1.address).toEqual(jasmine.any(Object));
  });
});

//getPromoted
describe("Test getPromoted", () => {
  let emp1;
  beforeEach(() => {
    emp1 = new Employee("ali", 28, 4);
  });

  it("test  If 0 < yearsOfExp <= 6 then salary will be increased by 20%", () => {
    emp1.calculateSalary();
    emp1.getPromoted();
    expect(emp1.salary).toBe(5000 * 1.2);
  });
  it("test  If 0 < yearsOfExp <= 6 call sendEmployeeMessage with you got promoted to be senior", () => {
    //    spy
    spyOn(emp1, "sendEmployeeMessage");
    emp1.calculateSalary();
    emp1.getPromoted();
    expect(emp1.sendEmployeeMessage).toHaveBeenCalled()
    expect(emp1.sendEmployeeMessage).toHaveBeenCalledWith('you got promoted to be senior')
    expect(emp1.sendEmployeeMessage).toHaveBeenCalledTimes(1)
  });
  it("test If 6 < yearsOfExp <= 7 then salary will be increased by 40%", () => {
    emp1.yearsOfExp = 7;
    emp1.calculateSalary();
    emp1.getPromoted();
    expect(emp1.salary).toBe(9000 * 1.4);
  });
  it("test If 6 < yearsOfExp <= 7  call sendEmployeeMessage with you got promoted to be team lead", () => {
    //    spy
    spyOn(emp1, "sendEmployeeMessage");
    emp1.yearsOfExp = 7;
    emp1.calculateSalary();
    emp1.getPromoted();
    expect(emp1.sendEmployeeMessage).toHaveBeenCalled()
    expect(emp1.sendEmployeeMessage).toHaveBeenCalledWith('you got promoted to be team lead')
    expect(emp1.sendEmployeeMessage).toHaveBeenCalledTimes(1)
  });
})

// deptInfo

describe("Test setAddress", () => {
    let emp1;
    beforeEach(() => {
      emp1 = new Employee("ali", 28, 4);
    });
    // mocking->fake
    it('Test that deptinfo works correctly',()=>{
        let obj=jasmine.createSpyObj(["getId","getLocation"])
        // fake implementation
        obj.getId.and.returnValue(123)
        obj.getLocation.and.returnValue('Qena')
        let res=  emp1.deptInfo(obj)
        expect(res).toBe('123: Qena')
        expect(obj.getId).toHaveBeenCalled()

    })
  });
*/