# Firesave
Backend : https://github.com/smarbal/firesave-API

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.4.

The goal of the project is to be able, as an accomodation provider (ie. a student residency), to know whether people are supposed to be in their room or not. In case of fire, this permits to identify who is missing at the rally point and thus who might be in danger. 

Full report : https://hackmd.io/@-rSxv3nFRUKlQDQF3ztJbQ/SynS87kXq

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## Inner working
### Auth
When loging in, a JWT is stored in the LocalStorage as well as an object representing the user with his attributes (surname, first name, number, etc.) in order to facilitate access to this information for the various services. I chose to store the token in LocalStorage rather than in a cookie so that the user can stay connected indefinitely and therefore avoid possible connection problems during a fire.

### Alerts

For privacy reasons,the *inside* field is not included by default in users returned from promotions. This is because, for privacy reasons, this field is only included when an alert is enabled.
An alert must be sent by several people for the server to go into alert mode and therefore include the inside field for the listed users.

Conveniently, alerts are handled by a websocket. We can thus receive an alert message but also send it to users ( to display of a banner during an alert message in this case). Differentiating users who send alerts is not implemented. When a certain number of alerts are sent, a global boolean changes to 1 on the server and is reset to 0 after a certain time. When it is set to 1, the *inside* field is included in all requests where *user* objects are sent.

## Preview 
![](https://i.imgur.com/35XAF75.png)


![](https://i.imgur.com/NFL4O3h.png)


![](https://i.imgur.com/myR8c1q.png)


