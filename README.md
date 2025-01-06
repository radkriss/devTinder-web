# Notes

Create a Vite + React application
Remove unnecessary code
Install tailwindCSS
Install DaisyUI
Add Navbar component
Install react-router-dom
Create routes
Create child route
create footer

AWS:
We have been using localhost for all this time
Now lets deploy our code into AWS so that anyone can access our application

First create a AWS account - Sign up using ur email
Login to AWS account

Search for EC2 - Elastic compute
You will be asked the name for ur instance - Give some name
Select the Operating system - Ubuntu
Instance type - t2.micro -> this comes as free from AWS
Key pair login - create one with RSA/pem - it will be downloaded to ur system on creation
Launch instance - an instance will be created

Wait till status is completed
Click on the instance id
You will get all details about public ip, private ip this and that
Now click on Connect -> It will provide you some ways to connect
Go to SSH so that we can login through the terminal
Go to our terminal where the pem key is downloaded and change the permission as given
Use the ssh command to login to the AWS machine

So now we have the ubuntu system, we need to install softwares to run the application right?
Install node -> Go to nodejs to see the steps
curl command
nvm to install node version - always install the version on which ur system runs node in local
U have to logout of the machine and login to have nvm available
Next we need to get our code - From github
git clone https format - it will be cloned
Get both backend and front end code
Now lets get our front end ready
U will first need to do npm install
then npm run build -> since its production (for local we do npm run dev right)
Now we need to use nginx to host our application - acts as a http server
sudo apt update -> updates ubuntu and packages
sudo apt install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
Copy code from dist(build files) to /var/www/html/
Go to the folder devTinder-web
sudo scp -r dist/* /var/www/html/
Now you are all done !

If u go to AWS console -> copy the public ip and hit in browser -> u will not get the app
this is because AWS blocks all ur ports
nginx is deployed on port number 80
so u have to enable this port 80 to make it work
How to do this
Now go to AWS -> go to the instance id to see details
click security -> security group
there will be an inboud rule for port 22
Add inbound rule with port 80 and save
You are good to go now -> hit the public ip now !
Note once u stop an instance and restart, the public ip will change, so try with new ip