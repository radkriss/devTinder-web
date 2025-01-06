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

Node Js Deployment:
Now lets build our app in local first
npm install
if u want to change the database password, go to mongo website - database access - generate password - update user
replace it in mongoose.connect call in nodejs where we connect to DB
Now push ur changes to github
Now we need to get the changes in our AWS machine
Login to the machine using the pem file
do git pull to get the latest changes to AWS machine
You should not save passwords in git

Now we need to start he node server
npm run dev is for local and npm start is for production
do npm start - u will see the database not getting connected, this is because we cannot connect to mongo from AWS
You will need to allow mongo to be connected from AWS
Go to mongo db -> Network access -> add the AWS IP or select select access from anywhere 0.0.0.0
Now if u try to connect from AWS u will be able to connect
try AWS ip: port/feed -> this won't work because u need to add inbound ip in AWS instance for port 7777 where node is running
Add it and then try u will get it

But we cannot keep the terminal open by doing npm start forever
We need to start the node app in backgroud using pm2 
npm install pm2 -g
pm2 start npm -- start
pm2 logs -> to check the logs
pm2 flush npm -> remove logs
pm2 list -> show list of process
pm2 stop npm -> stop a process
pm2 delete npm -> delete the process
pm2 start npm --name devTinderBackend -- start -> Custom name to the process

Now our front end react has to connect to our back end
this will not work now because we have localhost in our react code
we have to change our nginx config to route all routes to /api to :7777
sudo nano /etc/nginx/sites-available/default
Now go to server_name <ip_of_aws_machine> or <domain_name>
add another rule to redirect /api/ to localhost:7777/ -> got it from chatgpt
location /api/ {
    proxy_pass http://localhost:3000/;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
restart nginx
sudo systemctl restart nginx
Now if u try ip/api/feed -> u will get result in browser

Now we need to update our api calling in react app by changing the url to /api
since we don't specify the ip/localhost it will be default take the machine ip
push it to github
pull code in AWS
now if u try it will not work because u have to again build and copy the code to /var/www/html