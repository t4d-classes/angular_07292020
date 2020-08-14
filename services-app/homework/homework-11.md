# Homework 11

1. Upgrade the code from today to display a list of error messages for the car form in the validation modal.

2. Build a service which manages the array of cars. Implement methods to get the list of cars, to add a car, and to remove a car.

3. Upgrade the application to use the new cars services. Implement all three methods within the application. This may require adding new functionality to the car tool components.

4. Use access modifiers on the service class members to reflect their proper level of access for the application.

5. Build a Form Error Message service. Take the logic from step 1 and wrap it up in a service and use the service in car form.

The service will have the following method.

getErrorMessages(controlName, control, errors = [])

return value from the method, will be a human readable list of error messages. You will implement the code and data to build such messages within the context of the services making what code decisions and changes are needed to make it happen.

6. Display the error messages from the Form Error Message service in the validation modal.
