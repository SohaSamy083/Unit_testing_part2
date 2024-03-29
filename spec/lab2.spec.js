const User=require('../lab2')

describe('User', () => {
    let user;

    beforeEach(() => {
        user = new User('soha', '12345');
    });

    describe('addToCart', () => {
        it('should add a product to the cart array', () => {
            const product = { name: 'Product 1', price: 10 };
            user.addToCart(product);
            expect(user.cart).toContain(product);
        });
    });

    describe('calculateTotalCartPrice', () => {
        it('should return the total price of all products in the cart array', () => {
            user.addToCart({ name: 'Product 1', price: 10 });
            user.addToCart({ name: 'Product 2', price: 20 });
            expect(user.calculateTotalCartPrice()).toBe(30);
        });

        it('should return 0 if cart is empty', () => {
            expect(user.calculateTotalCartPrice()).toBe(0);
        });
    });

    describe('checkout', () => {
        it('should call paymentModel methods and return true if payment is verified', () => {
            const paymentModel = {
                goToVerifyPage: jasmine.createSpy('goToVerifyPage'),
                returnBack: jasmine.createSpy('returnBack'),
                isVerify: jasmine.createSpy('isVerify').and.returnValue(true)
            };

            const result = user.checkout(paymentModel);

            expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
            expect(paymentModel.returnBack).toHaveBeenCalled();
            expect(paymentModel.isVerify).toHaveBeenCalled();
            expect(result).toBe(true);
        });

        it('should return false if payment is not verified', () => {
            const paymentModel = {
                goToVerifyPage: jasmine.createSpy('goToVerifyPage'),
                returnBack: jasmine.createSpy('returnBack'),
                isVerify: jasmine.createSpy('isVerify').and.returnValue(false)
            };

            const result = user.checkout(paymentModel);

            expect(paymentModel.goToVerifyPage).toHaveBeenCalled();
            expect(paymentModel.returnBack).toHaveBeenCalled();
            expect(paymentModel.isVerify).toHaveBeenCalled();
            expect(result).toBe(false);
        });
    });
});
