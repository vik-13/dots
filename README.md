# tic-tac-toe
This is a popular tic-tac-toe online game. The game is created by using angular.js 1.x and firebase.

This is written as example my best pratice of using angular 1.x for SPA.
The application includes auth (sign-in, sign-up pages), list of all registered users, instant messager and obviously tic-tac-toe game.


# How to play.
First of all you should create a new account, after you will be redirected to dashboard. This is the main place of application.
On the left side you see all registered users (which ones are online you you can see green circle near the user name).
By clicking on user name you see the instant message box at the right bottom. You can type something there and just press enter, message will be sent to another user and he will see the notification of that.
Near the user name you can see game icon. It has 3 states:
gray -unavailable;
red - already in play with someone;
green - available to play

After clicking on that icon, another user see the notification and can confirm that game or cancel.

So, seems that`s all. Have a nice playing :)

# Here is the link to the builded application and hosted by firebase.
https://scorching-torch-5829.firebaseapp.com/

# How to install it localy

I used npm, bower and gulp, so you should just run next commands in command line

    npm install
    bower install
    gulp

# Policy

This application is free for use by everyone. So feel free to use it as an example.
Firebase doesn`t have any restriction for data except auth.
Firebase is responsible of authentication and authorization processes.
