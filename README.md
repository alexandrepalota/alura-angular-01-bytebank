# Bytebank

## Commands to getting started with Angular

Run `npm install -g @angular/cli` to install Angular CLI.

Run `ng new <project-name>` to create a new Angular project.

Run `cd <project-name>` to navigate to project folder

Run `ng serve` to run the application.

Run `ng serve -o` to run the application, and automatically open a browser screen.

## Create Componets with CLI

To create a component using CLI commands, run `ng generate component <component-name>`.

## Create Services with CLI

To create a service using CLI command, run `ng generate servcie <service-folder/service-name>`.

## Working with mocked REST API

First, install json-server running `npm install -g json-server`.

Create a folder named data (or any other name) in the project root.

Inside data folder, create a file named db.json containing all the desired data.

Finally, run `json-server --watch db.json` inside the data folder.
