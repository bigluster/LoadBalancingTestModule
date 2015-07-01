#Load Balancing Test Module

##Description
Prof of concept implementation of the Load Balancing Module API that implements a random load balancing algorithm

##Installation
1. Install nodejs found at http://nodejs.org/
2. Dowload the LoadBalancingTestModule
3. From the command prompt go to the directory where you stored the content
4. Run npm install
5. Go to QMC and export certificate for host that LoadBalancingTestModule is running on with password test
6. Copy certificates from C:\ProgramData\Qlik\Sense\Repository\Exported Certificates\[host] to the directory where you host the LoadBalancingTestModule
7. From the directory where you host LoadBalancingTestModule run "node LoadBalancingTestModule.js"
8. Add a virtual proxy to the proxy with prefix "custom", Load balancing module base URI "https://[server]:8187, Session cookie header name to "X-Qlik-Session-custom" and press OK and then Save.
9. Access the platform on https://[QV proxy server]/custom/hub or https://[QV proxy server]/custom/qmc and you will be using the loadbalancing module
