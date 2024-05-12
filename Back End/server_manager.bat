@echo off

REM Define an array containing the names of the microservices
set "microservices=authentication gateway"

REM Loop through each microservice directory
for %%i in (%microservices%) do (
    echo Installing dependencies for %%i...
    cd %%i
    npm init
    npm i express mongoose morgan nodemon bcrypt jsonwebtoken
    cd ..
)

echo All microservices dependencies installed successfully.