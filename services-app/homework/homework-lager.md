

# Homework Lager

Color Tool - display a list of colors, add a color, and delete a color

1. Upgrade the "colors.service" service, to provide functions for adding a color and deleting a color.

2. Use the components from the original project, in this project to provide a color tool which allows listing, adding and deleting colors using the colors service.

3. Within the add and delete methods of the colors service, use the LagerOne service to log the name of the operation (add, delete) and the name of the color to the console. The LagerOne service should be injected into the Colors Service.

4. Upgrade the application so that when the environment production value is set to true, the LagerTwo service is used.

Need the ability to switch between LagerOne and LagerTwo
 - Factory
 - Interface
 - Inject Token

5. Add validation for the color form to ensure that both the color name and color hexcode a filled out.

*6. Incorporate the Angular Material Modal Dialog to confirm deletes.

https://material.angular.io/components/dialog/overview

- install Angular Material dependency
- utilize the Dialog service

