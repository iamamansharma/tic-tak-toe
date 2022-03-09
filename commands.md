# Using node install angular globally
    `npm install -g @angular/cli`

# Generate new Angular application
    `ng new tic-tac-toe`

    here, <tic-tac-toe> is the name of angular app.

## We want to add routing to our angular application
##  Select yes

## We want to use scss for styling

# Adding extensions in VS Code
    1.  Angular Language Service -> gives syntax highlighting.
    2.  Angular Console -> gives angular commands (CLI) in a GUI format. // could not find in extensions - learning CLI commands :D

# Remove the boiler code in -
    src/app/app.component.html (keeping only <router-outlet></router-outlet> in that file)

# Generating Components in Angular - 
    `ng generate component box`
    or
    `ng g c box`

    here, box is the name of component 

# Installing <b>nebular<b> for ui/theme on Angular CLI -
    `ng add @nebular/theme` 

# Enabling PWA - 
    `ng add @angular/pwa`

# Logging into Firebase from CLI / VS Code - 
    `firebase login`

# Create a Project on firebase - using GUI (https://console.firebase.google.com/)

# Check for projects on firebase - 
    `firebase projects:list`

# Initialize project - 
    `firebase init`

# Adding Firebase to project - 
    `ng add @angular/fire`

# Deploying to Firebase - 
    `ng deploy`